import React from 'react';
import { render } from '@testing-library/react';

import React2Lib11 from './react2-lib11';

describe(' React2Lib11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React2Lib11 />);
    expect(baseElement).toBeTruthy();
  });
});
