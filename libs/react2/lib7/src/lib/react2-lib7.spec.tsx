import React from 'react';
import { render } from '@testing-library/react';

import React2Lib7 from './react2-lib7';

describe(' React2Lib7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React2Lib7 />);
    expect(baseElement).toBeTruthy();
  });
});
