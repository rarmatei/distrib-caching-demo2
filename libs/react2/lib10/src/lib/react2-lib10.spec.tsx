import React from 'react';
import { render } from '@testing-library/react';

import React2Lib10 from './react2-lib10';

describe(' React2Lib10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React2Lib10 />);
    expect(baseElement).toBeTruthy();
  });
});
