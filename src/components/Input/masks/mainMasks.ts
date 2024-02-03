import { ChangeEvent } from 'react';

export const passportCodeMask = (e: ChangeEvent<HTMLInputElement>, passportCode: string) => {
  const regexp = /(\d{3})(\d{3})/g;

  e.target.value = passportCode.replace(regexp, '$1-$2');
};

/**
 * Маска Военного билета или другого удостоверения личность военного РФ
 * */
export const militaryIDMask = (e: ChangeEvent<HTMLInputElement>, documentValue: string) => {
  const regex = /([А-Я]{2})([0-9]{7})/g;

  e.target.value = documentValue.replace(regex, '$1 $2');
};

/**
 * Маска Свидетельства о предоставлении временного убежища на территории Российской Федерации (до 01.01.2013)
 */
export const certificateTemporaryAsylumOldMask = (e: ChangeEvent<HTMLInputElement>, documentValue: string) => {
  const regex = /([А-Я]{2})([0-9]{3})(0-9){7}/g;

  e.target.value = documentValue.replace(regex, '$1-$2 $3');
};

/**
 * Маска Свидетельства о предоставлении временного убежища на территории Российской Федерации
 */
export const certificateTemporaryAsylumMask = (e: ChangeEvent<HTMLInputElement>, documentValue: string) => {
  const regex = /([А-Я]{2})([0-9]{7})/g;

  e.target.value = documentValue.replace(regex, '$1 $2');
};

/**
 * Маска Паспорта гражданина Российской Федерации
 */
export const pasportCitizenMask = (e: ChangeEvent<HTMLInputElement>, documentValue: string) => {
  const regexNumbersFormat = /([0-9]{2})([0-9]{2})([0-9]{6})/g;
  const regexAlternateFormat = /([0-9]{2})(\s[0-9]{2})(\s[0-9]{6})/g;

  if (regexNumbersFormat.test(documentValue)) {
    e.target.value = documentValue.replace(regexNumbersFormat, '$1 $2 $3');
  }

  if (regexAlternateFormat.test(documentValue)) {
    e.target.value = documentValue;
  }
};

/**
 * Маска СНИЛС
 */
export const snilsMask = (e: ChangeEvent<HTMLInputElement>, documentValue: string) => {
  const regexNumbersFormat = /([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})/g;
  const regexAlternateFormat = /([0-9]{3})(-[0-9]{3})(-[0-9]{3})(\s[0-9]{2})/g;

  if (regexNumbersFormat.test(documentValue)) {
    e.target.value = documentValue.replace(regexNumbersFormat, '$1-$2-$3 $4');
  }
  if (regexAlternateFormat.test(documentValue)) {
    e.target.value = documentValue;
  }
};
