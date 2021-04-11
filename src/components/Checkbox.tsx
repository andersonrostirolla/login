import React, { useState } from 'react';
import Input from './Input';
import Text from './Text';

interface Props {
  value: boolean;
  label: string;
  className?: string;
}

const Checkbox: any = React.forwardRef<Props, any>(({
  value,
  label,
  className
}, ref: any) => {
  const [checked, setChecked] = useState<boolean>(value);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event?.target?.checked);
  }

  return (
    <div
      className={className}
      data-testid="checkbox-data-test"
    >
      <Input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id="input-remember-me"
        name="remember"
        ref={ref}
      />
      <Text
        text={label}
        className="remember-me"
      />
    </div>
  )
})

export default Checkbox;
