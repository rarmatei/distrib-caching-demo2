import React from 'react';
import { render } from '@testing-library/react';

import React1Lib27 from './react1-lib27';

describe(' React1Lib27', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React1Lib27 />);
    expect(baseElement).toBeTruthy();
  });
});
