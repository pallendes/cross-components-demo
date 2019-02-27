import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '.';

storiesOf('Button', module)
  .add('default', () => <Button>Button</Button>)
  .add('Primary', () => <Button appearance="primary">Button</Button>)
  .add('Secondary', () => <Button appearance="secondary">Button</Button>)
  .add('Success', () => <Button appearance="success">Button</Button>)
  .add('Disabled', () => <Button disabled>Button</Button>);
