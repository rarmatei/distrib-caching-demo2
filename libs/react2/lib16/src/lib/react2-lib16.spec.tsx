import React from 'react';
import { render } from '@testing-library/react';

import React2Lib16 from './react2-lib16';

describe(' React2Lib16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React2Lib16 />);
    expect(baseElement).toBeTruthy();
  });
});
