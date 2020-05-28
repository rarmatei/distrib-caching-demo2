import React from 'react';
import { render } from '@testing-library/react';

import React1Lib2 from './react1-lib2';

describe(' React1Lib2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React1Lib2 />);
    expect(baseElement).toBeTruthy();
  });
});
