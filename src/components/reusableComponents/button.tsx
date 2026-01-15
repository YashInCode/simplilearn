import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
}

export default function Button({
  text,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 cursor-pointer';

  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
    secondary: 'bg-slate-200 text-slate-900 hover:bg-slate-300 active:bg-slate-400',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const widthStyles = fullWidth ? 'w-full' : '';
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${disabledStyles} ${className}`;

  return (
    <button
      className={combinedClassName}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
