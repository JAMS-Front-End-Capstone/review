/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PageNums from '../frontend/src/components/PageNums';

describe('PageNums', () => {
  it('renders the PageNums component', () => {
    render(<PageNums />);
  });
});
