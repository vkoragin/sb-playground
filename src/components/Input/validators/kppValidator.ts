import { TValError } from './types';

const kppValidator = (kpp: number | string) => {
	let result = false;
  const error: TValError = { code: 0, message: '' };
	if (typeof kpp === 'number') {
		kpp = kpp.toString();
	} else if (typeof kpp !== 'string') {
		kpp = '';
	}
	if (!kpp.length) {
		error.code = 1;
		error.message = 'Введите КПП';
	} else if (kpp.length !== 9) {
		error.code = 2;
		error.message = 'КПП может состоять только из 9 знаков (цифр или заглавных букв латинского алфавита от A до Z)';
	} else if (!/^[0-9]{4}[0-9A-Z]{2}[0-9]{3}$/.test(kpp)) {
		error.code = 3;
		error.message = 'Неправильный формат КПП';
	} else {
		result = true;
	}
	return {
    success: result,
    error,
  };
}

export default kppValidator;