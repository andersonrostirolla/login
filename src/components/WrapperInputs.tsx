import React from 'react';
import Input from './Input';

interface Props {
  className?: string;
  id?:string;
}

const WrapperInputs: any = React.forwardRef<Props, HTMLInputElement>(({
  className,
  id
}, ref: any) => {
  return (
    <div
      className={className}
      id={id}
    >
      <Input
        type="email"
        id="input-email"
        className="input-login"
        placeholder="Email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        title="O padrão de email esperado é: email@email.dominio!"
        name="email"
        ref={ref}
      />
      <Input
        type="password"
        id="input-password"
        className="input-login"
        placeholder="Password"
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        title="A senha precisa conter 8 caracteres sendo eles, uma distribuição com pelo menos uma letra maiúscula, uma minúscula e um número!"
        name="password"
        ref={ref}
      />
    </div>
  )
})

export default WrapperInputs;
