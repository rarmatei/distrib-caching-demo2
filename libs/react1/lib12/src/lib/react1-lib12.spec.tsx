import React from 'react';
import { render } from '@testing-library/react';

import React1Lib12 from './react1-lib12';

describe(' React1Lib12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React1Lib12 />);
    expect(baseElement).toBeTruthy();
  });
});
