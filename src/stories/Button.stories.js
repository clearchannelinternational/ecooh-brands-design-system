import React from 'react';

import { Button } from './Button';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const TemplateLight = (args) => <div className="theme--default"><Button {...args} /></div>;
const TemplateDark = (args) => <div className="theme--dark"><Button {...args} /></div>;

export const Primary = TemplateLight.bind({});
Primary.args = {
  mode: 'primary'
};

export const PrimaryDark = TemplateDark.bind({});
PrimaryDark.args = {
  mode: 'primary'
};

export const Secondary = TemplateLight.bind({});
Secondary.args = {
  mode: 'secondary'
};

export const SecondaryDark = TemplateDark.bind({});
SecondaryDark.args = {
  mode: 'secondary'
};
