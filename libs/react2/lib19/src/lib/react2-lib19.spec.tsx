import React from 'react';
import { render } from '@testing-library/react';

import React2Lib19 from './react2-lib19';

describe(' React2Lib19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React2Lib19 />);
    expect(baseElement).toBeTruthy();
  });
});
