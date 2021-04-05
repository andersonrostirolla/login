import React, { useEffect, useState } from 'react';
import Image from './Image';
import WrapperLogin from './WrapperLogin';

const WrapperContent: React.FC = () => {
  const [heightImage, setHeightImage] = useState('1024');
  
  useEffect(() => {
    document.onreadystatechange = () => {
      const html = document.querySelector('html');
      const bounds = html?.getBoundingClientRect();
      const top = bounds?.top || 0;
      const clientHeight = html?.clientHeight || 1024;
      const height = clientHeight - top;
      setHeightImage(String(height));
    };
  }, []);

  return (
    <div className="wrapper-content">
      <Image
        className="img-login"
        src="https://ciclovivo.com.br/wp-content/uploads/2019/09/caminho-de-grandiosas-arvores.jpg"
        fallbackSrc="https://s2.best-wallpaper.net/wallpaper/1920x1200/1312/Park-path-bench-trees-autumn-dusk_1920x1200.jpg"
        alt="imagem principal"
        height={heightImage}
      />
      <WrapperLogin/>
    </div>
  )
}

export default WrapperContent;
