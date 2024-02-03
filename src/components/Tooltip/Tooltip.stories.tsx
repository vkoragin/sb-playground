import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from './Tooltip';

const meta = {
  title: 'Tooltip',
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

const wrapperStyles: React.CSSProperties = {
  width: 'max-content',
  position: 'relative',
  margin: '150px auto',
  fontFamily: 'Roboto, sans-serif',
};

const buttonStyles: React.CSSProperties = {
  width: '100px',
  textAlign: 'center',
  padding: '1rem',
  color: '#FFFFFF',
  backgroundColor: '#D8D8D8',
  borderRadius: '1rem',
  fontSize: '1.6rem',
};

const TooltipWithHooks = (args: any) => {
  const [isShown, setIsShown] = useState<boolean>(false);
  return (
    <div style={wrapperStyles}>
      <div onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} style={buttonStyles}>
        Hover me
      </div>
      <Tooltip {...args} isShown={isShown} />
    </div>
  );
};

export const TooltipExample: Story = {
  render: (args) => <TooltipWithHooks {...args} />,
  args: {
    text: 'Hello, my name is Tooltip!',
    product: 'ofd',
    isShown: false,
  },
};
