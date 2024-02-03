import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

const handleClick = () => {
  alert('Button click!');
};

export const Primary: Story = {
  args: {
    styleType: 'primary',
    product: 'ofd',
    size: 'large',
    label: 'Primary',
    type: 'button',
    theme: 'info',
    disabled: false,
  },
};
export const PrimBtnWithRightIcon: Story = {
  args: {
    styleType: 'primary',
    product: 'ofd',
    theme: 'info',
    size: 'large',
    label: 'BtnWithRightIcon',
    rightIcon: 'key',
    type: 'button',
    iconStroke: true,
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    styleType: 'secondary',
    product: 'ofd',
    size: 'large',
    label: 'Secondary',
    type: 'button',
    theme: 'info',
    disabled: false,
  },
};

export const SecondBtnWithLeftIcon: Story = {
  args: {
    styleType: 'secondary',
    product: 'ofd',
    size: 'large',
    label: 'Button With Left Icon',
    leftIcon: 'key',
    type: 'button',
    theme: 'info',
    iconStroke: true,
    disabled: false,
  },
};

export const BtnWithDoubleIcon: Story = {
  args: {
    styleType: 'primary',
    product: 'ofd',
    size: 'large',
    label: 'BtnWithDoubleIcon',
    leftIcon: 'key',
    rightIcon: 'key',
    type: 'button',
    theme: 'info',
    disabled: false,
    iconStroke: true,
  },
};

export const BtnOnlyIcon: Story = {
  args: {
    label: 'BtnOnlyIcon',
    styleType: 'primary',
    product: 'ofd',
    size: 'large',
    leftIcon: 'key',
    type: 'button',
    theme: 'info',
    disabled: false,
    iconStroke: true,
  },
};

export const Default: Story = {
  args: {
    styleType: 'default',
    product: 'ofd',
    size: 'large',
    label: 'Default',
    type: 'button',
    theme: 'info',
    disabled: false,
    onClick: handleClick,
  },
};

export const Borderless: Story = {
  args: {
    styleType: 'borderless',
    product: 'ofd',
    size: 'large',
    label: 'Borderlles',
    type: 'button',
    theme: 'info',
    disabled: false,
    onClick: handleClick,
  },
};

export const BtnLoading: Story = {
  args: {
    styleType: 'primary',
    product: 'ofd',
    label: 'loading',
    size: 'large',
    theme: 'info',
    type: 'button',
    disabled: false,
    loading: true,
  },
};

export const Invisible: Story = {
  args: {
    styleType: 'invisible',
    product: 'ofd',
    label: 'Invisible',
    size: 'large',
    type: 'button',
    theme: 'info',
    disabled: false,
    loading: false,
  },
};

export const AsidePrimary: Story = {
  args: {
    styleType: 'aside-primary',
    product: 'ofd',
    label: 'Aside primary',
    size: 'large',
    type: 'button',
    theme: 'info',
    disabled: false,
    loading: false,
  },
};

export const AsideSecondary: Story = {
  args: {
    styleType: 'aside-secondary',
    product: 'ofd',
    label: 'Aside secondary',
    size: 'large',
    theme: 'info',
    type: 'button',
    disabled: false,
    loading: false,
  },
};

export const AsideSecondaryInSideBar: Story = {
  args: {
    styleType: 'aside-secondary',
    product: 'gosotchet',
    label: 'side bar',
    size: 'large',
    leftIcon: 'plus',
    theme: 'info',
    type: 'button',
    disabled: false,
    loading: false,
    iconStroke: true,
  },
};

export const CustomColors: Story = {
  args: {
    styleType: 'default',
    product: 'ofd',
    size: 'large',
    label: 'Default',
    type: 'button',
    theme: 'info',
    disabled: false,
    buttonStyles: {
      backgroundColor: 'red',
      color: 'white',
      borderColor: 'gold',
    },
    onClick: handleClick,
  },
};
