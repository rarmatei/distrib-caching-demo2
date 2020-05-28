import React from 'react';
import { render } from '@testing-library/react';

import React2Lib25 from './react2-lib25';

describe(' React2Lib25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React2Lib25 />);
    expect(baseElement).toBeTruthy();
  });
});
