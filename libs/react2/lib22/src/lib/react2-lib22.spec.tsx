import React from 'react';
import { render } from '@testing-library/react';

import React2Lib22 from './react2-lib22';

describe(' React2Lib22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React2Lib22 />);
    expect(baseElement).toBeTruthy();
  });
});
