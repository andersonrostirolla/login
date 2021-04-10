import React from 'react';
import { Button } from '../components';

import { render, screen } from '@testing-library/react';

describe('Button', () => {
  it('render without crashing', () => {
    render(<Button type="button"/>);

    expect(screen.getByTestId('button-data-test').type).toStrictEqual('button');
  })
  
  it('render alert correctly with props', () => {
    const { getByTestId, rerender } = render(<Button type="button" text="teste digitado"/>);

    expect(getByTestId('button-data-test').innerHTML).toBe('teste digitado');

    rerender(<Button type="button" text="teste digitado 2"/>)
    expect(getByTestId('button-data-test').innerHTML).toBe('teste digitado 2');
  })
})