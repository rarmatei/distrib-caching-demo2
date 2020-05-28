import React from 'react';
import { render } from '@testing-library/react';

import React1Lib16 from './react1-lib16';

describe(' React1Lib16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React1Lib16 />);
    expect(baseElement).toBeTruthy();
  });
});
