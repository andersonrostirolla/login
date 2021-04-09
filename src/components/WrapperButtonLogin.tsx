import React from 'react';
import Button from './Button';

interface Props {
  className?: string;
  id?:string;
  onClickCallback?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
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
        type="submit"
        className="button-login"
        text="LOGIN"
      />
    </div>
  )
}

export default WrapperButtonLogin;
