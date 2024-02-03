import type { Meta, StoryObj } from '@storybook/react';

import ServiceSwitcher from './ServiceSwitcher';

const currentService = 'edo';
const menuItems = [
  {
    id: 'ofd',
    label: 'ОФД',
    iconName: 'services_ofd',
  },
  {
    id: 'edo',
    label: 'ЭДО',
    iconName: 'services_edo',
  },
  {
    id: 'gosotchet',
    label: 'Госотчет',
    iconName: 'services_go',
  },
  {
    id: 'ofd2',
    label: 'ОФД',
    iconName: 'services_ofd',
  },
  {
    id: 'edo2',
    label: 'ЭДО',
    iconName: 'services_edo',
  },
];

const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};

const handleServiceClick = () => {
  console.log('открыть меню');
};

const meta = {
  title: 'ServiceSwitcher',
  component: ServiceSwitcher,
} satisfies Meta<typeof ServiceSwitcher>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Switcher: Story = {
  args: {
    // @ts-ignore
    serviceArr: menuItems,
    active: currentService,
    onChange: handleServiceChange,
    onClick: handleServiceClick,
  },
};
