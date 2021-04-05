import React from 'react';
import Image from './Image';
import WrapperLogin from './WrapperLogin';

const WrapperContent: React.FC = () => {
  return (
    <div className="wrapper-content">
      <Image
        className="img-login"
        src="https://s2.best-wallpaper.net/wallpaper/1920x1200/1312/Park-path-bench-trees-autumn-dusk_1920x1200.jpg"
        fallbackSrc="https://ciclovivo.com.br/wp-content/uploads/2019/09/caminho-de-grandiosas-arvores.jpg"
        alt="imagem principal"
      />
      <WrapperLogin/>
    </div>
  )
}

export default WrapperContent;
