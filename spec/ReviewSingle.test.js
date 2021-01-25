/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReviewSingle from '../frontend/src/components/tabs/ReviewSingle';

describe('ReviewSingle', () => {
  it('renders the ReviewSingle component', () => {
    render(<ReviewSingle />);
  });
});
