import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';
import { MultipleOption } from './SelectProps.model';

const docTypes: MultipleOption[] = [
  {
    value: 1,
    text: 'first',
    isSelected: false,
  },
  {
    value: 2,
    text: 'second',
    isSelected: false,
  },
  {
    value: 3,
    text: 'third',
    isSelected: false,
  },
];

const meta = {
  title: 'Select',
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultSelect: Story = {
  args: {
    title: 'Тип документа',
    subTitle: 'Все документы',
    options: docTypes,
    isMultiple: false,
    product: 'gosotchet',
    iconName: 'ok',
    isDisabled: false,
    warningMessage: 'warning!!!',
    iconStroke: false,
    iconFill: false,
    onSelect: (options: MultipleOption[]) => console.log(options),
  },
};

export const SelectDropUp: Story = {
  args: {
    title: 'Тип документа',
    subTitle: 'Все документы',
    options: docTypes,
    isMultiple: false,
    product: 'gosotchet',
    iconName: 'ok',
    isDisabled: false,
    warningMessage: 'warning!!!',
    dropDirection: 'up',
    iconStroke: false,
    iconFill: false,
    onSelect: (options: MultipleOption[]) => console.log(options),
  },
};
