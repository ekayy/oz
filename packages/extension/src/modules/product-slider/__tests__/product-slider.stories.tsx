import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ProductSlider } from '../component';
import { Story } from '@src/modules/dev';

// // // //

storiesOf('Product Slider', module).add('renders', () => {
  return (
    <Story>
      <ProductSlider />
    </Story>
  );
});
