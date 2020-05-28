import React from 'react';
import { render } from '@testing-library/react';

import React1Lib4 from './react1-lib4';

describe(' React1Lib4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React1Lib4 />);
    expect(baseElement).toBeTruthy();
  });
});
