import React from 'react';
import { Image } from '../components';

import { render, screen } from '@testing-library/react';

describe('Image', () => {
  it('render without crashing', () => {
    const src = 'https://ciclovivo.com.br/wp-content/uploads/2019/09/caminho-de-grandiosas-arvores.jpg';
    render(<Image src={src}/>);
    expect(screen.getByTestId('img-data-test').src).toStrictEqual(src);
  })
})