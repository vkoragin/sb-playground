import type { Meta, StoryObj } from '@storybook/react';
import ActivityRing from './ActivityRing';

const meta = {
  title: 'ActivityRing',
  component: ActivityRing,
} satisfies Meta<typeof ActivityRing>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ActivityRingPrimary: Story = {
  args: {
    progress: 51,
    product: 'ofd',
    showProgressText: true,
    progressTextColor: 'black',
  },
};
