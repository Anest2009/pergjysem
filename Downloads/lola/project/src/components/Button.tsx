import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
}

export function Button({ 
  variant = 'primary', 
  className = '', 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#B5CDA3] to-[#9ab889] hover:from-[#A9DFF7] hover:to-[#98cee6] text-white shadow-md hover:shadow-lg focus:ring-[#B5CDA3]',
    secondary: 'bg-gradient-to-r from-[#A9DFF7] to-[#98cee6] hover:from-[#98cee6] hover:to-[#87bdd5] text-white shadow-md hover:shadow-lg focus:ring-[#A9DFF7]',
    outline: 'border-2 border-[#B5CDA3] text-[#B5CDA3] hover:bg-gradient-to-r hover:from-[#B5CDA3] hover:to-[#9ab889] hover:text-white focus:ring-[#B5CDA3]'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}