import React from 'react';
import Text from './Text';

const Page404: React.FC = () => {
  return (
    <div className="page-404">
      <Text
        type="link"
        url="/login"
        text="Pagina não encontrada 404 :/ clique aqui para ser redirecionado ao login!"
        className="back-to-login"
      />
    </div>
  )
}

export default Page404;
