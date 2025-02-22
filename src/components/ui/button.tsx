import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="px-4 py-2 bg-black text-white rounded-lg hover:bg-black/90"
      {...props}
    >
      {children}
    </button>
  );
};