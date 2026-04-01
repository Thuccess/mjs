import React from 'react';
import { ArrowRight } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  icon?: boolean;
}

const base =
  'inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 active:scale-[0.98] bg-white text-black border border-gray-300 hover:bg-gray-50 hover:border-gray-400';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  className = '',
  icon = false,
}) => {
  const variants = {
    primary: `${base} px-6 py-3.5 text-sm`,
    secondary: `${base} px-6 py-3.5 text-sm`,
    ghost: `${base} border-gray-300 hover:bg-gray-50 hover:border-gray-400 px-6 py-3.5 text-sm`,
  };
  return (
    <button type={type} onClick={onClick} className={`${variants[variant]} ${className}`}>
      <span>{children}</span>
      {icon && variant === 'primary' && <ArrowRight size={18} aria-hidden />}
    </button>
  );
};

export default Button;
