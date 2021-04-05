import React, { useState } from 'react';

interface Props {
  src: string;
  fallbackSrc?: string;
  alt?: string;
  className?: string;
  width?: string;
  height?: string;
}

const Image: React.FC<Props> = ({
  src,
  fallbackSrc,
  alt,
  className,
  width,
  height
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
      width={width}
      height={height}
      onError={onError}
    />
  )
}

export default Image;
