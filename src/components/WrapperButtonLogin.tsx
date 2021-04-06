import React from 'react';
import Button from './Button';
import { useHistory } from 'react-router-dom';

interface Props {
  className?: string;
  id?:string;
}

const WrapperButtonLogin: React.FC<Props> = ({
  className,
  id
}) => {
  let history = useHistory();

  const onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void = () => {
    // chamada para o backend;
    const status = true
    if (status) {
      //success
      history.push('/logged');
    }
  }

  return (
    <div
      className={className}
      id={id}
    >
      <Button
        type="submit"
        className="button-login"
        text="LOGIN"
        onClickCallback={onClick}
      />
    </div>
  )
}

export default WrapperButtonLogin;
