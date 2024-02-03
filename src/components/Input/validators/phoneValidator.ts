import { TValError } from './types';

const phoneValidator = (phone: string) => {
  let result = false;
  const error: TValError = { code: 0, message: '' };

  const telephoneRegExp =
    // eslint-disable-next-line
    /^(\+7|7|8)?[\s\-]?\(?\d{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

  if (!phone.length) {
    error.code = 1;
    error.message = 'Введите номер телефона';
  } else if (telephoneRegExp.test(phone)) {
    result = true;
  } else {
    error.code = 2;
    error.message = 'Некорректный номер';
  }
  return {
    success: result,
    error,
  };
};

export default phoneValidator;
