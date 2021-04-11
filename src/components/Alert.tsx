import React, { useState, useEffect } from 'react';
import Text from './Text';

interface Props {
  position: 'top' | 'bottom';
  message: string;
  type: 'info' | 'warning' | 'error';
  visibility: 'hidden' | 'visible';
}

const Alert: React.FC<Props> = ({
  position,
  message,
  type,
  visibility
}) => {
  const [configs, setStyleConfigs] = useState({});

  useEffect(() => {
    switch (position) {
      case 'top':
        setStyleConfigs({
          top: 0
        });
        break;
      case 'bottom':
        setStyleConfigs({
          top: 0
        });
        break;
      default:
        setStyleConfigs({
          top: 0
        });
        break;
    }
  }, [position])

  return (
    <div
      className={`alert ${type}`}
      style={{...configs, "visibility": visibility }}
      data-testid="alert-data-test"
    >
      <Text
        text={message}
        className="alert-text"
      />
    </div>
  )
}

export default Alert;
