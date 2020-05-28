import React from 'react';
import { render } from '@testing-library/react';

import React2Lib15 from './react2-lib15';

describe(' React2Lib15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React2Lib15 />);
    expect(baseElement).toBeTruthy();
  });
});
