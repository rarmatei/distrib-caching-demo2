import React from 'react';
import { render } from '@testing-library/react';

import React1Lib17 from './react1-lib17';

describe(' React1Lib17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React1Lib17 />);
    expect(baseElement).toBeTruthy();
  });
});
