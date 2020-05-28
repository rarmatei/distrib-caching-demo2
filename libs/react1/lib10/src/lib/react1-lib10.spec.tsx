import React from 'react';
import { render } from '@testing-library/react';

import React1Lib10 from './react1-lib10';

describe(' React1Lib10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React1Lib10 />);
    expect(baseElement).toBeTruthy();
  });
});
