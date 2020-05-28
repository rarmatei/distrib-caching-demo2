import React from 'react';
import { render } from '@testing-library/react';

import React2Lib23 from './react2-lib23';

describe(' React2Lib23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React2Lib23 />);
    expect(baseElement).toBeTruthy();
  });
});
