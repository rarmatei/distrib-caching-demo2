import React from 'react';
import { render } from '@testing-library/react';

import React1Lib14 from './react1-lib14';

describe(' React1Lib14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React1Lib14 />);
    expect(baseElement).toBeTruthy();
  });
});
