import React from 'react';
import clsx from 'clsx';

const Card = ({ 
  children, 
  className, 
  hover = false,
  ...props 
}) => {
  return (
    <div
      className={clsx(
        'bg-white rounded-lg shadow-lg p-6',
        {
          'transition-transform duration-300 hover:-translate-y-2': hover,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;