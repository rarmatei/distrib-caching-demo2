import React from 'react';
import { render } from '@testing-library/react';

import React2Lib12 from './react2-lib12';

describe(' React2Lib12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React2Lib12 />);
    expect(baseElement).toBeTruthy();
  });
});
