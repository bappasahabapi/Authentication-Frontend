import React from "react";

interface FormProps {
  onSubmit: (e: React.FormEvent) => void;
  children: React.ReactNode;
}

const Form = ({ onSubmit, children }:FormProps) => {
  return (
    <form
      onSubmit={onSubmit}
      className="max-w-md mx-auto  mt-64 p-16 bg-white shadow-md rounded shadow-[#F55F11]"
    >
      {children}
    </form>
  );
};

export default Form;




