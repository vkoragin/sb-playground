import { TValError, TOgrnType } from './types';

const ogrnValidator = (ogrn: string, ogrnType: TOgrnType) => {
  let result = false;
  let currentOgrn = ogrn;
  const ogrnLength = ogrnType === 'person' ? 15 : 13;
  const error: TValError = { code: 0, message: '' };

  if (typeof currentOgrn !== 'string') {
    currentOgrn = '';
  }
  if (!currentOgrn.length) {
    error.code = 1;
    error.message = 'Введите ОГРН';
  } else if (/[^0-9]/.test(currentOgrn)) {
    error.code = 2;
    error.message = 'ОГРН может состоять только из цифр';
  } else if (currentOgrn.length !== ogrnLength) {
    error.code = 3;
    error.message = `ОГРН может состоять только из ${ogrnLength} цифр`;
  } else {
      const controlNumber = parseInt((parseInt(currentOgrn.slice(0, -1), 10) % (ogrnType === 'person' ? 13 : 11)).toString().slice(-1), 10);
      if (controlNumber === parseInt(currentOgrn[(ogrnType === 'person' ? 14 : 12)], 10)) {
        result = true;
      } else {
        error.code = 4;
        error.message = 'Неправильное контрольное число';
      }
 }

return {
 success: result,
 error,
 };
};

export default ogrnValidator;
