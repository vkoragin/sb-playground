import { TValError } from './types';

const passportValidator = (passport: string) => {
	let result = false;
  const error: TValError = { code: 0, message: '' };

	if (passport.length === 10) {
    result = true;
	} else {
		error.code = 1;
		error.message = 'Введите серию и номер пасспорта';
	}

	return {
    success: result,
    error,
  };
}

export default passportValidator;