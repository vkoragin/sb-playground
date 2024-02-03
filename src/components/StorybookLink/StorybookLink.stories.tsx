import type { Meta, StoryObj } from '@storybook/react';
import StorybookLink from './StorybookLink';

const meta = { 
  title: 'StorybookLink',
  component: StorybookLink,
} satisfies Meta<typeof StorybookLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Link: Story = {
  args: {
    product: 'edo',
    href: 'https://dzen.ru/?yredirect=true',
    label: 'Эта ссылка на яндекс',
    target: '_blank',
  },
};
