import React from 'react';
import { useHistory } from 'react-router-dom';

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
  let history = useHistory();

  const onClickLink = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (url) {
      history.push(url);
    }
  }

  const componentText = String(type).toLowerCase() === 'link'
    ? <a
        className="text-link"
        href={url}
        onClick={onClickLink}
      >{text}</a>
    : <span>{text}</span>;
  
  return (
    <div
      className={className}
      itemProp={itemprop}
      data-testid="text-data-test"
    >
      {componentText}
    </div>
  )
}

export default Text;
