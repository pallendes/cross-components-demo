import React from 'react';
import { storiesOf } from '@storybook/react';

import { Input } from '.';

storiesOf('Input', module)
  .add('Default', () => (
    <div style={{ width: '30%' }}>
      <Input />
    </div>
  ))
  .add('Invalid', () => (
    <div style={{ width: '30%' }}>
      <Input valid={false} />
    </div>
  ))
  .add('Disabled', () => (
    <div style={{ width: '30%' }}>
      <Input disabled />
    </div>
  ));
