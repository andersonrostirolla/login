import React from 'react';

interface Props {
  id?: string;
  className?: string;
  type: 'reset' | 'button' | 'submit';
  disabled?: boolean;
  name?: string;
  value?: string;
  title?: string;
  text?: string;
  onClickCallback?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = ({
  id,
  className,
  type,
  disabled,
  name,
  value,
  title,
  text,
  onClickCallback
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
      onClick={onClickCallback}
      data-testid="button-data-test"
    >
      {text}
    </button>
  )
}

export default Button;
