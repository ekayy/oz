import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Scroller } from '../component';
import { Story } from '@src/modules/dev';

// // // //

storiesOf('Scroller', module).add('renders', () => {
  return (
    <Story>
      <Scroller />
    </Story>
  );
});
