import React from 'react';
import { render } from '@testing-library/react';

import React1Lib9 from './react1-lib9';

describe(' React1Lib9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React1Lib9 />);
    expect(baseElement).toBeTruthy();
  });
});
