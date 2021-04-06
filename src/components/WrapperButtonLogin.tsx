import React from 'react';
import Button from './Button';

interface Props {
  className?: string;
  id?:string;
}

const WrapperButtonLogin: React.FC<Props> = ({
  className,
  id
}) => {
  return (
    <div
      className={className}
      id={id}
    >
      <Button
        name="login"
        type="submit"
        value="LOGIN"
        className="button-login"
      />
    </div>
  )
}

export default WrapperButtonLogin;
