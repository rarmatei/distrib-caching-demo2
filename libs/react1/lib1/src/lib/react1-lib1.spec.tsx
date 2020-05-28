import React from 'react';
import { render } from '@testing-library/react';

import React1Lib1 from './react1-lib1';

describe(' React1Lib1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React1Lib1 />);
    expect(baseElement).toBeTruthy();
  });
});
