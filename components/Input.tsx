import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  className = "",
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-white mb-2">
          {label}
        </label>
      )}
      <input
        className={`
          w-full px-4 py-3 rounded-lg
          bg-background-white border border-background-gray
          text-text-primary placeholder-text-light
          focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent
          transition-all duration-200
          ${error ? "border-accent-red focus:ring-accent-red" : ""}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-accent-red">{error}</p>
      )}
    </div>
  );
};

export default Input;

