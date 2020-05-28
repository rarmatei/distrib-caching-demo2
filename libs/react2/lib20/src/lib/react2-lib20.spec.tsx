import React from 'react';
import { render } from '@testing-library/react';

import React2Lib20 from './react2-lib20';

describe(' React2Lib20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React2Lib20 />);
    expect(baseElement).toBeTruthy();
  });
});
