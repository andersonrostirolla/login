import React from 'react';

interface Props {
  type?: string;
  text: string;
  url?: string;
  className?: string;
  itemprop?: string;
}

const Text: React.FC<Props> = ({
  type,
  text,
  url,
  className,
  itemprop
}) => {
  const componentText = String(type).toLowerCase() === 'link'
    ? <a href={url}>{text}</a>
    : <span>{text}</span>;
  
  return (
    <div 
      className={className}
      itemProp={itemprop}
    >
      {componentText}
    </div>
  )
}

export default Text;
