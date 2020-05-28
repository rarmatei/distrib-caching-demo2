import React from 'react';
import { render } from '@testing-library/react';

import React2Lib29 from './react2-lib29';

describe(' React2Lib29', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React2Lib29 />);
    expect(baseElement).toBeTruthy();
  });
});
