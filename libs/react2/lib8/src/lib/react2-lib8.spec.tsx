import React from 'react';
import { render } from '@testing-library/react';

import React2Lib8 from './react2-lib8';

describe(' React2Lib8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React2Lib8 />);
    expect(baseElement).toBeTruthy();
  });
});
