import React from 'react';
import Input from './Input';

interface Props {
  className?: string;
  id?:string;
}

const WrapperInputs: React.FC<Props> = ({
  className,
  id
}) => {
  return (
    <div
      className={className}
      id={id}
    >
      <Input
        type="email"
        id="input-email"
        className="input-login"
        placeholder="Email"
      />
      <Input
        type="password"
        id="input-password"
        className="input-login"
        placeholder="Password"
      />
    </div>
  )
}

export default WrapperInputs;
