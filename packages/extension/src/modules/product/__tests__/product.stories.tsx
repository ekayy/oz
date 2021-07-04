import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Product } from '../component';
import { Story } from '@src/modules/dev';

// // // //

storiesOf('Product', module).add('renders', () => {
  return (
    <Story>
      <Product />
    </Story>
  );
});
