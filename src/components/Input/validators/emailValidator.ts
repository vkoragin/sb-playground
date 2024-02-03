import { TValError } from './types';

const emailValidator = (email: string) => {
  let result = false;
  const error: TValError = { code: 0, message: '' };

  const emailRegExp =
     
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;

  if (!email.length) {
    error.code = 1;
    error.message = 'Введите e-mail';
  } else if (emailRegExp.test(email)) {
    result = true;
  } else {
    error.code = 2;
    error.message = 'Некорректный e-mail';
  }
  return {
    success: result,
    error,
  };
};

export default emailValidator;
