/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Summary from '../frontend/src/components/tabs/Summary';
import rateArry from '../frontend/src/components/data';

describe('Summary', () => {
  it('renders the Summary component', () => {
    render(<Summary ratings={[10, 10, 3, 4, 5, 6, 7, 8, 9, 10]} rateArray={rateArry} />);
    const checkbox = screen.getByTestId('ReviewRatingFilter_5');
    expect(checkbox.checked).toEqual(false);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
  });
});
