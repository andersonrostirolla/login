import React, { useState } from 'react';

interface Props {
  src: string;
  fallbackSrc?: string;
  alt?: string;
  className?: string;
}

const Image: React.FC<Props> = ({
  src,
  fallbackSrc,
  alt,
  className
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);

  const onError = () => {
    if (fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    }
  };

  return (
    <img
      className={className}
      src={currentSrc}
      alt={alt}
      onError={onError}
    />
  )
}

export default Image;
