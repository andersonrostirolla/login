import React from 'react';
import Text from './Text';
import SignUp from './SignUp';
import Form from './Form';

const WrapperLogin: React.FC = () => {
  const signModes = [{
    title: 'facebook',
    className: 'button-login-direct facebook'
  },
  {
    title: 'google',
    className: 'button-login-direct google'
  }];

  return (
    <div className="wrapper-login">
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
