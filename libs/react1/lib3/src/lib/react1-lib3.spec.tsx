import React from 'react';
import { render } from '@testing-library/react';

import React1Lib3 from './react1-lib3';

describe(' React1Lib3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React1Lib3 />);
    expect(baseElement).toBeTruthy();
  });
});
