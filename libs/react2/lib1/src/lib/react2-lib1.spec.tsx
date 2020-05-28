import React from 'react';
import { render } from '@testing-library/react';

import React2Lib1 from './react2-lib1';

describe(' React2Lib1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React2Lib1 />);
    expect(baseElement).toBeTruthy();
  });
});
