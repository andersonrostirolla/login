import React from 'react';
import { Checkbox } from '../components';

import { render, screen } from '@testing-library/react';

describe('Checkbox', () => {
  it('render without crashing', () => {
    render(<Checkbox value={true} label="Lembrar de mim"/>);
    const childNodes = screen.getByTestId('checkbox-data-test').childNodes;
    expect(childNodes[0].checked).toBe(true);
    expect(childNodes[1].textContent).toStrictEqual('Lembrar de mim');
  })
})