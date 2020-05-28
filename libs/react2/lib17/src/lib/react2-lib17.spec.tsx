import React from 'react';
import { render } from '@testing-library/react';

import React2Lib17 from './react2-lib17';

describe(' React2Lib17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React2Lib17 />);
    expect(baseElement).toBeTruthy();
  });
});
