import React from 'react';
import { render } from '@testing-library/react';

import React1Lib23 from './react1-lib23';

describe(' React1Lib23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React1Lib23 />);
    expect(baseElement).toBeTruthy();
  });
});
