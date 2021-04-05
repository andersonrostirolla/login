import React from 'react';
import Text from './Text';
import Button from './Button';

interface Props {
  title: string;
  className: string;
}

const SignUp: React.FC<{ signModes: Props[] }> = ({
  signModes
}) => {
  return (
    <div className="sign-up">
      <Text
        text="or sign up using"
        className="sign-up-text"
      />
      <div className="button-sign-up">
        {
          signModes.map((mode, index) => (
            <Button
              type="button"
              title={mode.title}
              className={mode.className}
              key={index}
            />
          ))
        }
      </div>
    </div>
  )
}

export default SignUp;
