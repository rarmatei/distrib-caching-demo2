import React from 'react';
import { render } from '@testing-library/react';

import React2Lib28 from './react2-lib28';

describe(' React2Lib28', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React2Lib28 />);
    expect(baseElement).toBeTruthy();
  });
});
