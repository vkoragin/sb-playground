import type { Meta, StoryObj } from '@storybook/react';
import DateInput from './DateInput';

const meta = {
  title: 'DateInput',
  component: DateInput,
} satisfies Meta<typeof DateInput>;

export default meta;

type Story = StoryObj<typeof meta>;

const handleRangeDateChange = (range: { from: string; to: string }) => {
  console.log(range);
};

export const RangeCalendar: Story = {
  args: {
    isRange: true,
    product: 'gosotchet',
    // @ts-ignore
    onChange: handleRangeDateChange,
    warningMsg: '',
    errorMsg: '',
    isDisabled: false,
  },
};
export const InputCalendar: Story = {
  // TODO Не все возможные пропсы отражаются на витрине
  args: {
    isRange: false,
    product: 'gosotchet',
    // @ts-ignore
    onChange: handleRangeDateChange,
    label: 'Выберите дату',
    warningMsg: '',
    errorMsg: '',
    isDisabled: false,
    minDate: new Date(2020, 0, 1),
    maxDate: new Date(2025, 11, 31),
  },
};
