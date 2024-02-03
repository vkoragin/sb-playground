import type { Meta, StoryObj } from '@storybook/react';
import Switch from './Switch';

const meta = {
  title: 'Switch',
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

const handleOnChange = (value: string | null) => {
  console.log(value);
};

const switchArr = [
  {
    id: '1',
    value: '1',
    label: '1',
  },
  {
    id: '2',
    value: '2',
    label: '2',
  },
  {
    id: '3',
    value: '3',
    label: '3',
  },
  {
    id: '4',
    value: '4',
    label: '4',
  },
];

export const ExampleSwitcher: Story = {
  args: {
    switchDataArr: switchArr,
    common: true,
    disabled: false,
    isCheckedSwitch: '2',
    onChange: handleOnChange,
    testId: 'switch-test-id',
    large: false,
    name: 'area',
  },
};
