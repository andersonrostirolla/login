import React from 'react';

interface Props {
  type: string;
  className?: string;
  id?: string;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
  value?: string;
  checked?: boolean;
  pattern?: string;
  title?: string;
}

const Input: React.FC<Props> = ({
  type,
  className,
  id,
  disabled,
  placeholder,
  required,
  value,
  checked,
  pattern,
  title
}) => {
  return (
    <input
      className={className}
      id={id}
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      required={required}
      value={value}
      checked={checked}
      pattern={pattern}
      title={title}
    />
  )
}

export default Input;
