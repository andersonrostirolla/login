import React from 'react';

interface Props {
  id?: string;
  className?: string;
  type: 'reset' | 'button' | 'submit';
  disabled?: boolean;
  name?: string;
  value?: string;
  title?: string;
}

const Button: React.FC<Props> = ({
  id,
  className,
  type,
  disabled,
  name,
  value,
  title
}) => {
  return (
    <button
      id={id}
      className={className}
      type={type}
      disabled={disabled}
      name={name}
      value={value}
      title={title}
    >
      {value}
    </button>
  )
}

export default Button;
