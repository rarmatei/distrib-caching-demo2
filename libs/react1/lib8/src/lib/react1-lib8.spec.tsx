import React from 'react';
import { render } from '@testing-library/react';

import React1Lib8 from './react1-lib8';

describe(' React1Lib8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React1Lib8 />);
    expect(baseElement).toBeTruthy();
  });
});
