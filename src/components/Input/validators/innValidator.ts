import { TInnType, TValError } from './types';

const innValidator = (inn: number | string, innType: TInnType) => {
  let result = false;
  const error: TValError = { code: 0, message: '' };
  if (typeof inn === 'number') {
    inn = inn.toString();
  } else if (typeof inn !== 'string') {
    inn = '';
  }
  if (!inn.length) {
    error.code = 1;
    error.message = 'Введите ИНН';
  } else if (/[^0-9]/.test(inn)) {
    error.code = 2;
    error.message = 'ИНН может состоять только из цифр';
  } else if ([10, 12].indexOf(inn.length) === -1) {
    if (innType === 'person') {
      error.code = 3;
      error.message = 'ИНН физического лица должен состоять из 12 цифр';
    } else {
      error.code = 4;
      error.message = 'ИНН юридического лица должен состоять из 10 цифр';
    }
  } else {
    const checkDigit = (inn_: string, coefficients: number[]) => {
      let n = 0;
      let g: number;
       
      for (const i in coefficients) {
        g = parseInt(inn_[i], 10);
        n += coefficients[i] * g;
      }
      return (n % 11) % 10;
    };
    if (innType === 'person') {
      if (inn.length === 12) {
        const n11: number = checkDigit(inn, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
        const n12: number = checkDigit(inn, [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
        if (n11 === parseInt(inn[10], 10) && n12 === parseInt(inn[11], 10)) {
          result = true;
        }
      } else {
        error.code = 5;
        error.message = 'ИНН физического лица должен состоять из 12 цифр';
      }
    } else if (innType === 'organisation') {
      if (inn.length === 10) {
        const n10: number = checkDigit(inn, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
        if (n10 === parseInt(inn[9], 10)) {
          result = true;
        }
      } else {
        error.code = 6;
        error.message = 'ИНН юридического лица должен состоять из 10 цифр';
      }
    }
    if (!result) {
      error.code = 7;
      error.message = 'Неправильное контрольное число';
    }
  }
  return {
    success: result,
    error,
  };
};

export default innValidator;
