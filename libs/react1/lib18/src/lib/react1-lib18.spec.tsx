import React from 'react';
import { render } from '@testing-library/react';

import React1Lib18 from './react1-lib18';

describe(' React1Lib18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React1Lib18 />);
    expect(baseElement).toBeTruthy();
  });
});
