import React from 'react';
import Text from './Text';
import Input from './Input';
import Checkbox from './Checkbox';
import Button from './Button';

interface Props {
  className?: string;
}

const Form: React.FC<Props> = ({
  className
}) => {
  return (
    <form className={className}>
      <div className="wrapper-inputs">
        <Input
          type="email"
          id="input-email"
          className="input-login"
          placeholder="Email"
        />
        <Input
          type="password"
          id="input-password"
          className="input-login"
          placeholder="Password"
        />
      </div>
      <div className="actions-login">
        <Checkbox
          value={false}
          label="Remember me"
          className="checkbox-remember-me"
        />
        <Text
          type="link"
          url="https://www.google.com.br"
          text="Forgot password?"
          className="forgot-password"
        />
      </div>
      <Button
        name="login"
        type="submit"
        value="LOGIN"
        className="button-login"
      />
    </form>
  )
}

export default Form;
