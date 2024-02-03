import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Tumbler from './Tumbler';

const meta = {
  title: 'Tumbler',
  component: Tumbler,
} satisfies Meta<typeof Tumbler>;

export default meta;

type Story = StoryObj<typeof meta>;

const TumblerWithHooks = (args: any) => {
  const { isScale } = args;

  const wrapperStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    ...(isScale && {
      minHeight: '100vh',
      alignItems: 'center',
      transform: 'scale(10)',
    }),
  };

  return (
    <div style={{ ...wrapperStyle }}>
      <Tumbler {...args} />
    </div>
  );
};

export const ExampleTumbler: Story = {
  render: (args) => <TumblerWithHooks {...args} />,
  args: {
    isDisabled: false,
    isActive: false,
    product: 'gosotchet',
    onChange: console.log,
  },
};
