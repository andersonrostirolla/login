import React, { useEffect } from 'react';
import Text from './Text';
import { setSessionStorage, getSessionStorage } from '../utils'

const Logged: React.FC = () => {
  useEffect(() => {
    if (getSessionStorage('remember') !== 'true') {
      setSessionStorage('login', false);
    }
  }, [])

  const onClick = (event: any) => {
    event.preventDefault();
    setSessionStorage('remember', false);
    setSessionStorage('login', false);
  };

  return (
    <div
      className="logged"
      onClick={onClick}
    >
      <Text
        type="link"
        url="/login"
        text="Exit"
        className="back-to-login"
      />
    </div>
  )
}

export default Logged;
