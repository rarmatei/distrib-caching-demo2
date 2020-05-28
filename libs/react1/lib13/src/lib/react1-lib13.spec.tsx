import React from 'react';
import { render } from '@testing-library/react';

import React1Lib13 from './react1-lib13';

describe(' React1Lib13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React1Lib13 />);
    expect(baseElement).toBeTruthy();
  });
});
