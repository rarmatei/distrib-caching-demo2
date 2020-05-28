import React from 'react';
import { render } from '@testing-library/react';

import React1Lib24 from './react1-lib24';

describe(' React1Lib24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React1Lib24 />);
    expect(baseElement).toBeTruthy();
  });
});
