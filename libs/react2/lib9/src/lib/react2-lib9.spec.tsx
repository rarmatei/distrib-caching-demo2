import React from 'react';
import { render } from '@testing-library/react';

import React2Lib9 from './react2-lib9';

describe(' React2Lib9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React2Lib9 />);
    expect(baseElement).toBeTruthy();
  });
});
