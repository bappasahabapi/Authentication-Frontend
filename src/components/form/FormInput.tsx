import React, { useState } from "react";

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  register: any;
  required?: boolean;
  showToggle?: boolean;
  placeholder?: string;
  error?: string; 
}

const FormInput = ({
  label,
  type,
  name,
  register,
  required = false,
  showToggle = false,
  placeholder,
  error
}: InputFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-4 flex flex-col items-start gap-2">

      <label
        htmlFor={name}
        className="block text-gray-700 font-bold"
      >
        {label}
      </label>

      {/* Input Field */}
      <div className="relative w-full">
        <input
          {...register(name)}
          id={name}
          type={showToggle && showPassword ? "text" : type}
          // className="w-full px-3 py-2 border rounded pr-10"
          required={required}
          placeholder={placeholder}
          className={`w-full px-3 py-2 border rounded ${
            error ? "border-red-500" : "border-gray-300"
          }`}
          style={{backgroundColor:'black'}}
        />
        {showToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2/4 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            {showPassword ? "👁️" : "🔒"}
          </button>
        )}

      {error && <p className="text-red-500 text-sm mt-1 font-bold text-start">{error}</p>}

      </div>
    </div>
  );
};

export default FormInput;
