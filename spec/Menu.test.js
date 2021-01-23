/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Menu from '../frontend/src/components/Menu';

describe('Menu', () => {
  it('renders the Menu component', () => {
    render(<Menu total={40} />);
    expect(screen.getByText('Reviews')).toBeInTheDocument();
    expect(screen.getByText('40')).toBeInTheDocument();
  });
});
