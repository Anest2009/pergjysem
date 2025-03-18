import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function Link({ href, className = '', children, ...props }: LinkProps) {
  return (
    <a
      href={href}
      className={`text-gray-700 hover:text-[#B5CDA3] transition-colors duration-200 ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}