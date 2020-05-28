import React from 'react';
import { render } from '@testing-library/react';

import React2Lib26 from './react2-lib26';

describe(' React2Lib26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React2Lib26 />);
    expect(baseElement).toBeTruthy();
  });
});
