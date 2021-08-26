import React from 'react';

import { Button } from './Button';

export default {
  title: 'components/Button',
  component: Button,
};

const TemplateLight = (args) => <div className="theme--default"><Button {...args} /></div>;
// const TemplateDark = (args) => <div className="theme--dark"><Button {...args} /></div>;

export const Primary = TemplateLight.bind({});
Primary.args = {
  state: 'primary'
};

export const Secondary = TemplateLight.bind({});
Secondary.args = {
  state: 'secondary'
};


export const Tertiary = TemplateLight.bind({});
Tertiary.args = {
  state: 'tertiary'
};

export const Danger = TemplateLight.bind({});
Danger.args = {
  state: 'danger'
};

// export const PrimaryDark = TemplateDark.bind({});
// PrimaryDark.args = {
//   state: 'primary'
// };

// export const SecondaryDark = TemplateDark.bind({});
// SecondaryDark.args = {
//   state: 'secondary'
// };
