import React, { useState, useEffect } from 'react';
import Text from './Text';

interface Props {
  position: 'topright' | 'topleft' | 'bottomright' | 'bottomleft';
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
      case 'topright':
        setStyleConfigs({
          right: 0,
          top: 0
        });
        break;
      case 'topleft':
        setStyleConfigs({
          left: 0,
          top: 0
        });
        break;
      case 'bottomright':
        setStyleConfigs({
          right: 0,
          bottom: 0
        });
        break;
      case 'bottomleft':
        setStyleConfigs({
          left: 0,
          bottom: 0
        });
        break;
      default:
        setStyleConfigs({
          top: 0,
          left: 0
        });
        break;
    }
  }, [position])

  return (
    <div
      className={`alert ${type}`}
      style={{...configs, "visibility": visibility }}
    >
      <Text
        text={message}
        className="alert-text"
      />
    </div>
  )
}

export default Alert;
