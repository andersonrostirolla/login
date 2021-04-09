import React, { useEffect, useState } from 'react';
import Text from './Text';
import SignUp from './SignUp';
import Login from './Login';
import { isMobile } from '../utils/browser';

interface Props {
  className?: string;
  id?: string;
}

interface signMode {
  title: string;
  className: string;
}

const WrapperLogin: React.FC<Props> = ({
  className,
  id
}) => {
  const signModes: Array<signMode> = [{
    title: 'facebook',
    className: 'button-login-direct facebook'
  },
  {
    title: 'google',
    className: 'button-login-direct google'
  }];

  const [heightGrid, setHeightGrid] = useState('420px');

  useEffect(() => {
    const html: HTMLHtmlElement | null = document.querySelector('html');
    const height: number = html?.clientWidth || 420;
    let gridTemplateColumnValue: string = 'none';
    if (isMobile()) {
      gridTemplateColumnValue = `${height}px`;
    }
    setHeightGrid(gridTemplateColumnValue);
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
      <Login className="wrapper-form"/>
      <SignUp signModes={signModes}/>
    </div>
  )
}

export default WrapperLogin;
