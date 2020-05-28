import React from 'react';
import { render } from '@testing-library/react';

import React1Lib0 from './react1-lib0';

describe(' React1Lib0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React1Lib0 />);
    expect(baseElement).toBeTruthy();
  });
});
