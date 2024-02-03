const snilsValidator = (snils: string) => {
  let result = false;
  const error: {
    code: number;
    message: string;
  } = {
    code: 0,
    message: ''
  };
  if (!snils.length) {
    error.code = 1;
    error.message = 'Введите СНИЛС';
  } else if (/[^0-9]/.test(snils)) {
    error.code = 2;
    error.message = 'СНИЛС может состоять только из цифр';
  } else if (snils.length !== 11) {
    error.code = 3;
    error.message = 'СНИЛС может состоять только из 11 цифр';
  } else {
    let sum = 0;
    for (let i = 0; i < 9; i+=1) {
      sum += parseInt(snils[i], 10) * (9 - i);
    }
    let checkDigit = 0;
    if (sum < 100) {
      checkDigit = sum;
    } else if (sum > 101) {
      checkDigit = parseInt(String(sum % 101), 10);
      if (checkDigit === 100) {
        checkDigit = 0;
      }
    }
    if (checkDigit === parseInt(snils.slice(-2), 10)) {
      result = true;
    } else {
      error.code = 4;
      error.message = 'Неправильное контрольное число';
    }
  }

  return {
    success: result,
    error
  };
};

export default snilsValidator;