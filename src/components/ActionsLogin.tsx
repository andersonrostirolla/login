import React from 'react';
import Checkbox from './Checkbox';
import Text from './Text';

interface Props {
  className?: string;
  id?:string;
}

const ActionsLogin: React.FC<Props> = ({
  className,
  id
}) => {
  return (
    <div
      className={className}
      id={id}
    >
      <Checkbox
        value={false}
        label="Remember me"
        className="checkbox-remember-me"
      />
      <Text
        type="link"
        url="/register"
        text="Register"
        className="register"
      />
      <Text
        type="link"
        url="/forgetpass"
        text="Forgot password?"
        className="forgot-password"
      />
    </div>
  )
}

export default ActionsLogin;
