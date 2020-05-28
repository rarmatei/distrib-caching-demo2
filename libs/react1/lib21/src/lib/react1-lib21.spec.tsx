import React from 'react';
import { render } from '@testing-library/react';

import React1Lib21 from './react1-lib21';

describe(' React1Lib21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React1Lib21 />);
    expect(baseElement).toBeTruthy();
  });
});
