import React from 'react';
import { render } from '@testing-library/react';

import React2Lib0 from './react2-lib0';

describe(' React2Lib0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React2Lib0 />);
    expect(baseElement).toBeTruthy();
  });
});
