import React from 'react';
import { render } from '@testing-library/react';

import React1Lib25 from './react1-lib25';

describe(' React1Lib25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React1Lib25 />);
    expect(baseElement).toBeTruthy();
  });
});
