import React from 'react';
import { render } from '@testing-library/react';

import React2Lib18 from './react2-lib18';

describe(' React2Lib18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React2Lib18 />);
    expect(baseElement).toBeTruthy();
  });
});
