import React from 'react';
import { render } from '@testing-library/react';

import React1Lib7 from './react1-lib7';

describe(' React1Lib7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React1Lib7 />);
    expect(baseElement).toBeTruthy();
  });
});
