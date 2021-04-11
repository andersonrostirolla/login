import React from 'react';
import Text from './Text';


const RouteMiddleware: React.FC = () => {
  return (
    <div className="page-unauthorized">
      <Text
        type="link"
        url="/login"
        text="Você tentou acessar diretamente o login sem estar autenticado. Clique aqui para voltar ao login!"
        className="back-to-login"
      />
    </div>
  )
}

export default RouteMiddleware;
