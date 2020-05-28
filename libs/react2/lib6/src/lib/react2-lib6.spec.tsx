import React from 'react';
import { render } from '@testing-library/react';

import React2Lib6 from './react2-lib6';

describe(' React2Lib6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React2Lib6 />);
    expect(baseElement).toBeTruthy();
  });
});
