import React, { useState } from 'react';
import WrapperInputs from './WrapperInputs';
import ActionsLogin from './ActionsLogin';
import WrapperButtonLogin from './WrapperButtonLogin';
import Alert from './Alert';
import { useHistory } from 'react-router-dom';
import { useLazyQuery, gql } from '@apollo/client'
import { useForm } from 'react-hook-form';
import { messages } from '../utils/messages'

interface Props {
  className?: string;
}

const LOGIN = gql`
  query Login ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      name
      email
    }
  }
`;

const TRYLOGIN = gql`
  query TryLogin ($email: String!, $password: String!) {
    tryLogin(email: $email, password: $password)
  }
`;

const Login: React.FC<Props> = ({
  className
}) => {
  let history = useHistory();
  const [visibility, setAlertVisible] = useState<'hidden' | 'visible'>('hidden');
  const [messageAlert, setMessageAlert] = useState('');
  const [tmpEmail, setTmpEmail] = useState('');
  const [tmpPassword, setTmpPassword] = useState('');
  const [typeAlert, setTypeAlert] = useState<'info' | 'error' | 'warning'>('info');
  const setAlerts = (
    message: string,
    time: number,
    type: 'info' | 'error' | 'warning',
    redirect: boolean
  ): void => {
    setMessageAlert(message);
    setTypeAlert(type);
    setAlertVisible('visible');
    setTimeout(() => {
      setAlertVisible('hidden');
      if (redirect) {
        history.push('/logged');
      }
    }, time);
  };
  const [tryLogin] = useLazyQuery(TRYLOGIN, {
    onCompleted: () => {
      authenticate({ variables: { email: tmpEmail, password: tmpPassword } });
      setTmpEmail('');
      setTmpPassword('');
    },
    onError: (error) => {
      setAlerts(error.message, 4000, 'error', false)
    }
  });
  const [authenticate] = useLazyQuery(LOGIN, {
    onCompleted: () => setAlerts(messages.login.success, 1000, 'info', true),
    onError: (error) => setAlerts(error.message, 3000, 'error', false)
  });
  const { register, handleSubmit } = useForm();

  const onSubmit = async ({ email, password }: any) => {
    setTmpEmail(email);
    setTmpPassword(password);
    tryLogin({ variables: { email, password }});
  };

  return (
    <form
      className={className}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Alert
        position="topright"
        message={messageAlert}
        type={typeAlert}
        visibility={visibility}
      />
      <WrapperInputs
        className="wrapper-inputs"
        ref={register}
      />
      <div className="wrapper-actions-login">
        <ActionsLogin className="actions-login"/>
      </div>
      <WrapperButtonLogin className="wrapper-button-login"/>
    </form>
  )
}

export default Login;
