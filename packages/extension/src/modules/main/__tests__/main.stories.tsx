import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Main } from '../component';
import { Story } from '@src/modules/dev';

// // // //

storiesOf('Main', module).add('renders', () => {
  return (
    <Story>
      <Main brandName="Nesquik" />
    </Story>
  );
});
