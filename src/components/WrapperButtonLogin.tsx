import React, { useState } from 'react';
import Button from './Button';
import { useHistory } from 'react-router-dom';
import Alert from './Alert';

interface Props {
  className?: string;
  id?:string;
}

const WrapperButtonLogin: React.FC<Props> = ({
  className,
  id
}) => {
  const [visibility, setAlertVisible] = useState<'hidden' | 'visible'>("hidden");
  let history = useHistory();

  const onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void = (event) => {
    event.preventDefault();
    // chamada para o backend;
    const status = true
    if (status) {
      //success
      setAlertVisible("visible");
      setTimeout(() => {
        setAlertVisible("hidden");
        history.push('/logged');
      }, 3000);
    }
  }

  return (
    <div
      className={className}
      id={id}
    >
      <Alert
        position="topright"
        message="Acesso concedido, aguarde você será redirecionado."
        type="info"
        visibility={visibility}
      />
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
