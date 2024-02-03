import type { Meta, StoryObj } from '@storybook/react';
import Icon from './Icon';

const meta = {
  title: 'Icon',
  component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const IconDefault: Story = {
  args: {
    name: 'animatedSpinner',
    product: 'gosotchet',
    iconFill: false,
    iconStroke: true,
    width: '35',
    height: '35',
  },
};
