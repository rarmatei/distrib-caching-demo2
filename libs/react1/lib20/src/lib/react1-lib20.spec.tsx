import React from 'react';
import { render } from '@testing-library/react';

import React1Lib20 from './react1-lib20';

describe(' React1Lib20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React1Lib20 />);
    expect(baseElement).toBeTruthy();
  });
});
