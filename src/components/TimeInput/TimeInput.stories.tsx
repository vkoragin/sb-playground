import type { Meta, StoryObj } from '@storybook/react';
import TimeInput from './TimeInput';

const meta = {
  title: 'TimeInput',
  component: TimeInput,
} satisfies Meta<typeof TimeInput>;

export default meta;

type Story = StoryObj<typeof meta>;

const handleRangeDateChange = (range: { from: string; to: string }) => {
  console.log(range);
};

export const InputTime: Story = {
  // TODO Не все возможные пропсы отражаются на витрине
  args: {
    product: 'gosotchet',
    // @ts-ignore
    onChange: handleRangeDateChange,
    label: 'Выберите время',
    warningMsg: '',
    errorMsg: '',
    valueFrom: '12:33',
    isDisabled: false,
  },
};
