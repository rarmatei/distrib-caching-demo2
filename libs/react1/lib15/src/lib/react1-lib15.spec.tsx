import React from 'react';
import { render } from '@testing-library/react';

import React1Lib15 from './react1-lib15';

describe(' React1Lib15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React1Lib15 />);
    expect(baseElement).toBeTruthy();
  });
});
