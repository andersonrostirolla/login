import React from 'react';
import { Text } from '../components';

import { render, screen } from '@testing-library/react';

describe('Text', () => {
  const text = 'testando texto';

  it('render without crashing', () => {
    render(<Text text={text}/>);

    expect(screen.getByTestId('text-data-test').firstChild.innerHTML).toStrictEqual(text);
  })

  it('render with prop link', () => {
    const url = 'https://www.google.com.br/';
    render(<Text type="link" url={url} text={text}/>);

    expect(screen.getByTestId('text-data-test').firstChild.href).toStrictEqual(url);
    expect(screen.getByTestId('text-data-test').firstChild.innerHTML).toStrictEqual(text);
  })
})