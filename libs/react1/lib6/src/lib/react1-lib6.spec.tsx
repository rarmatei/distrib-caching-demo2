import React from 'react';
import { render } from '@testing-library/react';

import React1Lib6 from './react1-lib6';

describe(' React1Lib6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React1Lib6 />);
    expect(baseElement).toBeTruthy();
  });
});
