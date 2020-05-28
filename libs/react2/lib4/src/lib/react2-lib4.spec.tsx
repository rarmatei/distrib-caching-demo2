import React from 'react';
import { render } from '@testing-library/react';

import React2Lib4 from './react2-lib4';

describe(' React2Lib4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React2Lib4 />);
    expect(baseElement).toBeTruthy();
  });
});
