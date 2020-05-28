import React from 'react';
import { render } from '@testing-library/react';

import React1Lib28 from './react1-lib28';

describe(' React1Lib28', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React1Lib28 />);
    expect(baseElement).toBeTruthy();
  });
});
