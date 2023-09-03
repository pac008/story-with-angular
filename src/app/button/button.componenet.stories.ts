import type { Meta, StoryObj } from '@storybook/angular';

import { ButtonComponent} from './button.component';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
};
type Story = StoryObj<ButtonComponent>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/angular/api/csf
 * to learn how to use render functions.
 */
 export const Primary: Story = {
  name: 'I am the primary',
  argTypes: {
    label: {
      options: ['Normal', 'Bold', 'Italic'],
      mapping: {
        Bold: "<b>Bold</b>",
        Italic: "<i>Italic</i>",
      },
    },
},
  args: {
    backgroundColor: '#ff0',
    color: 'blue'

  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    label: '😄👍😍💯',
  },
};


export default meta;