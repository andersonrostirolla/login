import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import Alert from './Alert';
import Text from './Text';
import { useForm } from 'react-hook-form';
import { useMutation, gql } from '@apollo/client'
import { messages } from '../utils/messages'
import { useHistory } from 'react-router-dom';
import User from '../interfaces/User'

const CREATE_USER = gql`
  mutation CreateUser ($data: UserInput!) {
    createUser(data: $data) {
      email,
      name
    }
  }
`;

const Register: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const [visibility, setAlertVisible] = useState<'hidden' | 'visible'>('hidden');
  const [messageAlert, setMessageAlert] = useState('');
  const [typeAlert, setTypeAlert] = useState<'info' | 'error' | 'warning'>('info');
  let history = useHistory();
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
        history.push('/login');
      }
    }, time);
  };
  const [createUser] = useMutation(CREATE_USER, {
    onCompleted: () => setAlerts(messages.register.success, 3000, 'info', true),
    onError: () => setAlerts(messages.register.error, 3000, 'error', false)
  });
  const onSubmit = ({ email, name, password }: User) => {
    createUser({ variables: { data: { email, password, name }}});
  };

  return (
    <div className="register-acount">
      <form
        className="form-register-acount"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Alert
          position="top"
          message={messageAlert}
          type={typeAlert}
          visibility={visibility}
        />
        <Text
          text="Create your acount"
          className="text-create-acount"
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
        <Input
          type="password"
          className="input-login"
          placeholder="Password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="A senha precisa conter 8 caracteres sendo eles, uma distribuição com pelo menos uma letra maiúscula, uma minúscula e um número!"
          name="password"
          ref={register}
        />
        <Button
          type="submit"
          className="button-create-acount"
          text="Register"
        />
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

export default Register;
