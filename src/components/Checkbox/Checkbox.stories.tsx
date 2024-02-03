import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';

const meta = {
  title: 'Checkbox',
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

const handleCheckboxClick = () => {
  alert('check');
};

const handleCheckboxKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  alert(e);
};

export const Default: Story = {
  args: {
    label: 'CheckBoxBase',
    value: 'check',
    checked: true,
    onClick: handleCheckboxClick,
    onKeyDown: handleCheckboxKeyDown,
    product: 'ofd',
    helpBlockText: 'Подсказка или ошибка',
    error: false,
    warning: false,
    disabled: false,
    currentIndex: 1,
    totalElements: 45,
  },
};

export const Error: Story = {
  args: {
    label: 'CheckBoxBase',
    value: 'check',
    checked: true,
    onClick: handleCheckboxClick,
    product: 'ofd',
    helpBlockText: 'Ошибка',
    error: true,
    warning: false,
    disabled: false,
    currentIndex: 17,
    totalElements: 45,
  },
};

export const Warning: Story = {
  args: {
    label: 'CheckBoxBase',
    value: 'check',
    checked: true,
    onClick: handleCheckboxClick,
    product: 'ofd',
    helpBlockText: 'Подсказка',
    error: false,
    warning: true,
    disabled: false,
    currentIndex: 45,
    totalElements: 45,
  },
};

export const Disable: Story = {
  args: {
    label: 'CheckBoxBase',
    value: 'check',
    checked: false,
    onClick: handleCheckboxClick,
    product: 'ofd',
    helpBlockText: '',
    error: false,
    warning: false,
    disabled: true,
    currentIndex: 2,
    totalElements: 45,
  },
};
