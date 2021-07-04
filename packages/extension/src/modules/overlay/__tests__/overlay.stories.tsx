import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Overlay } from '../component';
import { Story } from '@src/modules/dev';

// // // //

storiesOf('Overlay', module).add('renders', () => {
  return (
    <Story>
      <Overlay />
    </Story>
  );
});
