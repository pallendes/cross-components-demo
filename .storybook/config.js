import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import { defaultTheme, alternativeTheme } from '../packages/core/src';

function loadStories() {
  require('glob-loader!./stories.pattern');
}

addDecorator(withInfo);

const themes = [defaultTheme, alternativeTheme];
addDecorator(withThemesProvider(themes));

addDecorator((story) => <div>{story()}</div>);

configure(loadStories, module);
