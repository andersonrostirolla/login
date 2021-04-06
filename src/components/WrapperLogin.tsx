import React, { useEffect, useState } from 'react';
import Text from './Text';
import SignUp from './SignUp';
import Form from './Form';

interface Props {
  className?: string;
  id?: string;
}

const WrapperLogin: React.FC<Props> = ({
  className,
  id
}) => {
  const signModes = [{
    title: 'facebook',
    className: 'button-login-direct facebook'
  },
  {
    title: 'google',
    className: 'button-login-direct google'
  }];

  const [heightGrid, setHeightGrid] = useState('420px');

  useEffect(() => {
    const html = document.querySelector('html');
    const height = html?.clientWidth || 420;
    setHeightGrid(`${height}px`);
  }, [heightGrid]);

  return (
    <div
      className={className}
      style={{ gridTemplateColumns: heightGrid }}
    >
      <Text
        text="Login to continue"
        className="title-login"
      />
      <Form className="wrapper-form"/>
      <SignUp signModes={signModes}/>
    </div>
  )
}

export default WrapperLogin;
