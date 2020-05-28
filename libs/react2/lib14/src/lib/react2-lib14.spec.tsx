import React from 'react';
import { render } from '@testing-library/react';

import React2Lib14 from './react2-lib14';

describe(' React2Lib14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React2Lib14 />);
    expect(baseElement).toBeTruthy();
  });
});
