import React from 'react';
import Text from './Text';

const Logged: React.FC = () => {
  return (
    <div className="logged">
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
