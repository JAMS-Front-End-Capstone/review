/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';

import Reviews from '../frontend/src/components/Reviews';

describe('Reviews', () => {
  test('renders Reviews component', () => {
    render(<Reviews />);
  });
});
