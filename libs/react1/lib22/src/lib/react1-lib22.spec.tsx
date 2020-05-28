import React from 'react';
import { render } from '@testing-library/react';

import React1Lib22 from './react1-lib22';

describe(' React1Lib22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React1Lib22 />);
    expect(baseElement).toBeTruthy();
  });
});
