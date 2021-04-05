import React from 'react';
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
  return (
    <div className={className}>
      <Input
        type="checkbox"
        checked={true}
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
