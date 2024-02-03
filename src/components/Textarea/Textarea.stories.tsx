import type { Meta, StoryObj } from '@storybook/react';
import Textarea from './Textarea';

const meta = {
  title: 'Textarea',
  component: Textarea,
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    product: 'ofd',
    placeholder: 'введите текст',
    label: 'Это текстарея',
    disabled: false,
    error: false,
    warning: false,
    helpBlockText: 'предупреждение или ошибка',
    innerText: '',
    onChange: (e) => console.log(e.target.value),
  },
};
