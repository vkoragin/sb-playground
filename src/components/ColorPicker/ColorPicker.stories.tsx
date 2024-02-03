import React, { useCallback, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ColorPicker from './ColorPicker';
import { ColorPickerHandler } from './ColorPicker.model';

const meta = {
  title: 'ColorPicker',
  component: ColorPicker,
} satisfies Meta<typeof ColorPicker>;

export default meta;

type Story = StoryObj<typeof meta>;

const ColorPickerWithHooks = (args: any) => {
  const [color, setColor] = useState<ColorPickerHandler>();
  const [colorCompleted, setColorCompleted] = useState<ColorPickerHandler>();

  const handleChange = useCallback((data: ColorPickerHandler) => {
    setColor(data);
  }, []);

  const handleChangeComplete = useCallback((data: ColorPickerHandler) => {
    setColorCompleted(data);
  }, []);

  return (
    <>
      <div style={{ margin: '0 auto', maxWidth: '90%' }}>
        <ColorPicker {...args} onChange={handleChange} onChangeComplete={handleChangeComplete} />
      </div>

      <div style={{ fontSize: '15px' }}>
        <h2>Вывод значений сразу:</h2>
        <pre>{JSON.stringify({ ...color }, null, 2)}</pre>
      </div>

      <div style={{ fontSize: '15px' }}>
        <h2>Вывод значений сразу, по завершению:</h2>
        <pre>{JSON.stringify({ ...colorCompleted }, null, 2)}</pre>
      </div>
    </>
  );
};

export const WithDefaultRGBColor: Story = {
  render: (args) => <ColorPickerWithHooks {...args} />,
  args: {
    initColor: {
      r: 222,
      g: 222,
      b: 222,
      a: 100,
    },
  },
};
