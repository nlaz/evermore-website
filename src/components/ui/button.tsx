import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  children,
  onClick,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const baseStyles = 'rounded-lg transition-all font-medium';

  const variantStyles = {
    primary: 'bg-golden-ochre text-white hover:bg-golden-ochre/90',
    secondary: 'bg-midnight-moss text-soft-parchment hover:bg-charred-plum',
    outline: 'border-2 border-golden-ochre text-golden-ochre hover:bg-golden-ochre hover:text-white',
  };
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={buttonStyles} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
