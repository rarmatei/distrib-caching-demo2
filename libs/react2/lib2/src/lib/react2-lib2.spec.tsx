import React from 'react';
import { render } from '@testing-library/react';

import React2Lib2 from './react2-lib2';

describe(' React2Lib2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React2Lib2 />);
    expect(baseElement).toBeTruthy();
  });
});
