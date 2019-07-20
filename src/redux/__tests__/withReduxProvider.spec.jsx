import React from 'react';
import { render } from '@testing-library/react';

import withRedux from '../withReduxProvider';

describe('WithReduxProvider', () => {
  it('should match snapshot', () => {
    const props = {
      router: {
        location: {
          pathname: '/login',
        },
      },
    };

    const component = props => <div {...props}>Redux</div>;
    const Redux = withRedux(component);
    const { container } = render(<Redux env="development" {...props} />);
    expect(container).toMatchSnapshot();
  });
});
