


"use client";
import Form from "@/components/form/Form";
import FormInput from "@/components/form/FormInput";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type LoginFields = {
  identifier: string;  // Strapi expects "identifier"
  password: string;
};

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isDisabled, setIsDisabled] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<LoginFields>({
    defaultValues: {
      identifier: "admin10@gmail.com",
      password: "123456",
    },
  });

  const [login, { isLoading }] = useLoginMutation();

  const onFormSubmit = async (data: LoginFields) => {
    const toastId = toast.loading("Logging in...", { position: "top-center" });
    setIsDisabled(true);

    try {
      // Call Strapi auth
      const res = await login(data).unwrap(); // { jwt, user }
      // Save to store
      dispatch(setUser({ user: res.user, token: res.jwt }));

      toast.success("User logged in successfully", {
        id: toastId,
        position: "top-center",
        duration: 1500,
      });

      router.push("/home");
    } catch (err: any) {
      const msg =
        err?.data?.error?.message ||
        err?.error ||
        "Login failed. Please try again.";

      // Strapi sends "Invalid identifier or password"
      if (/invalid identifier or password/i.test(msg)) {
        setError("identifier", { type: "server", message: "Invalid email" });
        setError("password", { type: "server", message: "Invalid password" });
      } else {
        toast.error(msg, { id: toastId, position: "top-center" });
      }
    } finally {
      setIsDisabled(false);
      toast.dismiss(toastId);
    }
  };



  const setValidUser = () => {
    reset({
      identifier: "admin10@gmail.com",
      password: "123456",
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onFormSubmit)}>
        <h2 className="text-3xl font-bold mb-4 text-center text-[#f07432]">
          Login
        </h2>

        <FormInput
          label="Email"
          type="email"
          name="identifier"
          register={register}
          required
          placeholder="admin10@gmail.com"
          error={errors.identifier?.message as string}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          register={register}
          showToggle
          required
          placeholder="••••••"
          error={errors.password?.message as string}
        />

        <button
          type="submit"
          disabled={isDisabled || isLoading}
          className={`w-full py-2 rounded ${
            isDisabled || isLoading
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-[#F55F11] text-white hover:bg-green-600 font-bold"
          }`}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </Form>

      <button
        type="button"
        onClick={setValidUser}
        className="w-[25%] mt-4 py-2 bg-yellow-200 text-gray-700 rounded hover:bg-gray-300"
      >
        Valid User
      </button>
    </>
  );
};

export default LoginForm;