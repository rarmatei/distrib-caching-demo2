import React from 'react';
import { render } from '@testing-library/react';

import React1Lib19 from './react1-lib19';

describe(' React1Lib19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React1Lib19 />);
    expect(baseElement).toBeTruthy();
  });
});
