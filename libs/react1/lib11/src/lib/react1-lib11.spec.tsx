import React from 'react';
import { render } from '@testing-library/react';

import React1Lib11 from './react1-lib11';

describe(' React1Lib11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React1Lib11 />);
    expect(baseElement).toBeTruthy();
  });
});
