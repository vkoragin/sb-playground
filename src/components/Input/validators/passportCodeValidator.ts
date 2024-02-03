import { TValError } from './types';

const passportCodeValidator = (code: string) => {
	let result = false;
  const error: TValError = { code: 0, message: '' };

	if (code.length === 7) {
    result = true;
	} else {
		error.code = 1;
		error.message = 'Введите код подразделения';
	}

	return {
    success: result,
    error,
  };
}

export default passportCodeValidator;