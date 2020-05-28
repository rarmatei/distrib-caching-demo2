import React from 'react';
import { render } from '@testing-library/react';

import React1Lib29 from './react1-lib29';

describe(' React1Lib29', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React1Lib29 />);
    expect(baseElement).toBeTruthy();
  });
});
