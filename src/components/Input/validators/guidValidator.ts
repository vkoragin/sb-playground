import { TValError } from './types';

const validateGuid = (guid: string) => {
  let result = false;
  const error: TValError = { code: 0, message: '' };

  const guidRegExp = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  if (!guid.length) {
    error.code = 1;
    error.message = 'Введите идентификатор';
  } else if (guidRegExp.test(guid)) {
    result = true;
  } else {
    error.code = 2;
    error.message = 'Некорректный идентификатор';
  }
  return {
    success: result,
    error,
  };
};

export default validateGuid;
