import React from 'react';
import clsx from 'clsx';

const Button = ({ 
  children, 
  variant = 'primary', 
  className, 
  fullWidth = false,
  ...props 
}) => {
  return (
    <button
      className={clsx(
        'px-6 py-2 rounded transition-colors duration-200 font-medium',
        {
          'bg-gold hover:bg-gold/80 text-white': variant === 'primary',
          'border-2 border-gold text-gold hover:bg-gold hover:text-white': variant === 'outline',
          'bg-black hover:bg-black/80 text-white': variant === 'dark',
          'w-full': fullWidth,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;