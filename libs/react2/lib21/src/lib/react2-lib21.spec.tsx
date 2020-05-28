import React from 'react';
import { render } from '@testing-library/react';

import React2Lib21 from './react2-lib21';

describe(' React2Lib21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React2Lib21 />);
    expect(baseElement).toBeTruthy();
  });
});
