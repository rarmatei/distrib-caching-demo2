import React from 'react';
import { render } from '@testing-library/react';

import React2Lib3 from './react2-lib3';

describe(' React2Lib3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React2Lib3 />);
    expect(baseElement).toBeTruthy();
  });
});
