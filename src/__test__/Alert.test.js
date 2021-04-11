import React from 'react';
import { Alert } from '../components';

import { render, screen } from '@testing-library/react';

describe('Alert', () => {
  it('render without crashing', () => {
    render(<Alert position="top" type="info" visibility="visible" message="Texto digitado"/>);

    expect(screen.getByTestId('alert-data-test').style.visibility).toStrictEqual('visible');
  })
  
  it('render alert correctly with props', () => {
    const { rerender } = render(<Alert position="top" type="info" visibility="visible" message="Texto digitado"/>);
    expect(screen.getByTestId('alert-data-test').style.visibility).toStrictEqual('visible');
    
    rerender(<Alert position="top" type="info" visibility="hidden" message="Texto digitado"/>)
    expect(screen.getByTestId('alert-data-test').style.visibility).not.toStrictEqual('visible');
  })
})