import React from 'react';
import { render } from '@testing-library/react';

import React1Lib5 from './react1-lib5';

describe(' React1Lib5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React1Lib5 />);
    expect(baseElement).toBeTruthy();
  });
});
