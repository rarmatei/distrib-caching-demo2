import React from 'react';
import { render } from '@testing-library/react';

import React2Lib13 from './react2-lib13';

describe(' React2Lib13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React2Lib13 />);
    expect(baseElement).toBeTruthy();
  });
});
