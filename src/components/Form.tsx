import React from 'react';
import WrapperInputs from './WrapperInputs';
import ActionsLogin from './ActionsLogin';
import WrapperButtonLogin from './WrapperButtonLogin';

interface Props {
  className?: string;
}

const Form: React.FC<Props> = ({
  className
}) => {
  return (
    <form className={className}>
      <WrapperInputs className="wrapper-inputs"/>
      <ActionsLogin className="actions-login"/>
      <WrapperButtonLogin className="wrapper-button-login"/>
    </form>
  )
}

export default Form;
