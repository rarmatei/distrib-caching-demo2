import React from 'react';
import { render } from '@testing-library/react';

import React2Lib24 from './react2-lib24';

describe(' React2Lib24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React2Lib24 />);
    expect(baseElement).toBeTruthy();
  });
});
