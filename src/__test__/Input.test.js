import React from 'react';
import ReactDOM from 'react-dom';
import { Input } from '../components'

import { render, screen } from '@testing-library/react';

describe('Input', () => {
  it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Input type="text"/>, div);
  })
  
  it('render input correctly with props', () => {
    render(<Input type="text" name="input-teste" placeholder="teste de string"/>);
    expect(screen.getByTestId('input-data-test').placeholder).toStrictEqual('teste de string');
  })
})