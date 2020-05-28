import React from 'react';
import { render } from '@testing-library/react';

import React1Lib26 from './react1-lib26';

describe(' React1Lib26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React1Lib26 />);
    expect(baseElement).toBeTruthy();
  });
});
