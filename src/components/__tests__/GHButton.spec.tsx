import React from 'react';
import { render } from '@testing-library/react';
import GHButton from '../GHButton';

describe('<GHButton />', () => {
  test('should render correctly', async () => {
    const { asFragment } = await render(
      <GHButton
        resource={{
          endpoint: 'https://api.github.com/users/noelzappy',
          attr: 'followers',
        }}
        href="https://github.com/noelzappy"
        title="Follow @noelzappy on GitHub"
        text="Follow @noelzappy on GitHub"
        icon={{
          prefix: 'fab',
          iconName: 'github',
        }}
        size="lg"
        showCount={true}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
