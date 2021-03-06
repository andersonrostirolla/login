import React, {
  InputHTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes
} from 'react';

interface Props {
  type: string;
  className?: string;
  id?: string;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
  value?: string | number | boolean;
  checked?: boolean;
  pattern?: string;
  title?: string;
  name?: string;
  onChange?: Function;
}

const Input: ForwardRefExoticComponent<InputHTMLAttributes<Props> & RefAttributes<Props>> = React.forwardRef<Props, InputHTMLAttributes<Props>>(({
  type,
  className,
  id,
  disabled,
  placeholder,
  required,
  value,
  checked,
  pattern,
  title,
  name,
  onChange
}, ref: any) => {
  return (
    <input
      ref={ref}
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
      name={name}
      onChange={onChange}
      data-testid="input-data-test"
    />
  )
})

export default Input;
