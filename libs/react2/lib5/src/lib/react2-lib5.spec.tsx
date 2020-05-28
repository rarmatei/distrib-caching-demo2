import React from 'react';
import { render } from '@testing-library/react';

import React2Lib5 from './react2-lib5';

describe(' React2Lib5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React2Lib5 />);
    expect(baseElement).toBeTruthy();
  });
});
