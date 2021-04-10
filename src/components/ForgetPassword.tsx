import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import Alert from './Alert';
import Text from './Text';
import { useForm } from 'react-hook-form';
import { gql, useLazyQuery } from '@apollo/client'
import { messages } from '../utils/messages'
import User from '../interfaces/User'

const RECOVER_PASSWORD = gql`
  query RecoverPassword ($email: String!, $name: String!) {
    recoverPassword(email: $email, name: $name) {
      password
    }
  }
`;

const ForgetPassword: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const [visibility, setAlertVisible] = useState<'hidden' | 'visible'>('hidden');
  const [messageAlert, setMessageAlert] = useState('');
  const [typeAlert, setTypeAlert] = useState<'info' | 'error' | 'warning'>('info');
  const [password, setPassword] = useState('');
  const setAlerts = (
    message: string,
    time: number,
    type: 'info' | 'error' | 'warning'
  ): void => {
    setMessageAlert(message);
    setTypeAlert(type);
    setAlertVisible('visible');
    setTimeout(() => {
      setAlertVisible('hidden');
    }, time);
  };
  const [recoverPassword] = useLazyQuery(RECOVER_PASSWORD, {
    onCompleted: (recover) => {
      setPassword(recover.recoverPassword.password)
      setAlerts(messages.recoverPassword.success, 3000, 'info')
    },
    onError: () => setAlerts(messages.recoverPassword.error, 5000, 'error')
  });
  const onSubmit = ({ email, name }: User) => {
    recoverPassword({ variables: { email, name }});
  };

  const passwordLabel = password ?
    <Text
      text={`Your password recover: ${password}`}
      className="text-forget-recover"
    /> : '';

  return (
    <div className="forget-password">
      <form
        className="form-forget-password"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Alert
          position="topright"
          message={messageAlert}
          type={typeAlert}
          visibility={visibility}
        />
        <Text
          text="Recover your password"
          className="text-forget"
        />
        <Input
          type="text"
          className="input-login"
          placeholder="Name"
          name="name"
          ref={register}
        />
        <Input
          type="email"
          className="input-login"
          placeholder="Email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="O padrão de email esperado é: email@email.dominio!"
          name="email"
          ref={register}
        />
        <Button
          type="submit"
          className="button-forget"
          text="Send"
        />
        {passwordLabel}
        <Text
          type="link"
          url="/login"
          text="Back to login"
          className="back-to-login"
        />
      </form>
    </div>
  )
}

export default ForgetPassword;
