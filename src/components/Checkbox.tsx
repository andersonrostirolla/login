import React, { useState } from 'react';
import Input from './Input';
import Text from './Text';

interface Props {
  value: boolean;
  label?: string;
  className?: string;
}

const Checkbox: React.FC<Props> = ({
  value,
  label,
  className
}) => {
  const [checked, setChecked] = useState<boolean>(false);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event?.target?.checked);
  }

  return (
    <div className={className}>
      <Input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id="input-remember-me"
      />
      <Text
        text="Remember me"
        className="remember-me"
      />
    </div>
  )
}

export default Checkbox;
