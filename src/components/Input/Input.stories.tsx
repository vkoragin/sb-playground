import React, { useCallback, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta = {
  title: 'Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

const InputWithHooks = (args: any) => {
  const [validationResult, setValidationResult] = useState(false);

  const handleValidation = useCallback((res: boolean) => {
    setValidationResult(res);
  }, []);

  return (
    <div>
      <Input {...args} onValidate={handleValidation} />

      <div
        style={{
          marginTop: '35px',
          fontSize: '18px',
        }}
      >
        В родителе выводим результат валидации: {JSON.stringify(validationResult, null, 2)}
      </div>
    </div>
  );
};

export const defaultInput: Story = {
  args: {
    label: 'Тип документа',
    type: 'text',
    placeholder: 'Введите название',
    fieldType: 'default',
    required: true,
    product: 'gosotchet',
    icon: 'smartphone',
    iconStroke: true,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => console.log(e),
  },
};
export const disabledInput: Story = {
  args: {
    ...defaultInput.args,
    disabled: true,
  },
};
export const errorInput: Story = {
  args: {
    ...defaultInput.args,
    label: 'Email',
    fieldType: 'email',
    theme: 'error',
    defaultValue: 'Неправильный email',
    hintText: 'Вы что, не знаете ваш email?',
  },
};
export const focusInput: Story = {
  args: {
    ...defaultInput.args,
  },
};
export const vehicleNumberInput: Story = {
  args: {
    ...defaultInput.args,
    label: 'Номер ТС',
    placeholder: 'Введите номер ТС',
    hintText: 'Номер не соответствует ГОСТ',
    fieldType: 'vehicleNumber',
    product: 'gosotchet',
    iconPosition: 'left',
    icon: undefined,
  },
};
export const emailValidatedInput: Story = {
  args: {
    ...defaultInput.args,
    label: 'Email',
    placeholder: 'Введите ваш email адрес',
    hintText: 'Неправильный email',
    fieldType: 'email',
    product: 'gosotchet',
    iconPosition: 'left',
    icon: undefined,
  },
};
export const INNValidatedInput: Story = {
  args: {
    ...defaultInput.args,
    label: 'ИНН физического лица',
    placeholder: 'Введите ИНН физ лица',
    hintText: 'Неправильный ИНН (12)',
    fieldType: 'innPerson',
    product: 'gosotchet',
    maxLength: 12,
    icon: undefined,
  },
};
export const SNILSValidatedInput: Story = {
  args: {
    ...defaultInput.args,
    label: 'СНИЛС',
    placeholder: 'Введите СНИЛС',
    hintText: 'Неправильный СНИЛС',
    fieldType: 'snils',
    product: 'gosotchet',
    maxLength: 11,
    icon: undefined,
  },
};
export const passportCodeMaskInput: Story = {
  args: {
    ...defaultInput.args,
    label: 'Код подразделения',
    fieldType: 'passportCode',
    product: 'gosotchet',
    maxLength: 7,
    icon: undefined,
  },
};
export const phoneInput: Story = {
  args: {
    ...defaultInput.args,
    label: 'Телефон',
    fieldType: 'phone',
    maxLength: 50,
    inputId: 'phone',
    product: 'gosotchet',
  },
};
export const rightImageInput: Story = {
  args: {
    ...defaultInput.args,
    theme: 'info',
    product: 'gosotchet',
    label: 'Адрес',
    placeholder: 'Индекс, город',
    icon: 'email',
    iconPosition: 'right',
  },
};
export const passwordOpenerInput: Story = {
  args: {
    ...defaultInput.args,
    label: 'Пароль',
    placeholder: 'От 8 знаков до 10 символов',
    hintText: 'Введите буквы, цифры, подчеркивание...',
    minLength: 8,
    maxLength: 10,
    type: 'password',
    theme: 'info',
    product: 'gosotchet',
    passwordOpener: true,
  },
};

export const checkValidationInput: Story = {
  render: (args) => <InputWithHooks {...args} />,
  args: {
    ...defaultInput.args,
    label: 'Телефон',
    fieldType: 'phone',
    maxLength: 50,
    inputId: 'phone',
    product: 'gosotchet',
  },
};
