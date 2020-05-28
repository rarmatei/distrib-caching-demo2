import React from 'react';
import { render } from '@testing-library/react';

import React2Lib27 from './react2-lib27';

describe(' React2Lib27', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React2Lib27 />);
    expect(baseElement).toBeTruthy();
  });
});
