const vehicleNumberValidator = (vehicleNumber: string) => {
  const privateRegExp = /^[АВЕКМНОРСТУХ]\d{3}(?<!000)[АВЕКМНОРСТУХ]{2}\d{2,3}$/ui;
  const transportOrtaxiRegExp = /^[АВЕКМНОРСТУХ]{2}\d{3}(?<!000)\d{2,3}$/ui;
  const trailersRegExp = /^[АВЕКМНОРСТУХ]{2}\d{4}(?<!0000)\d{2,3}$/ui;
  const motoOrAgriculturalEquipmentRegExp = /^\d{4}(?<!0000)[АВЕКМНОРСТУХ]{2}\d{2,3}$/ui;
  const trazitRegExp = /^[АВЕКМНОРСТУХ]{2}\d{3}(?<!000)[АВЕКМНОРСТУХ]\d{2,3}$/ui;
  const visitingRegExp = /^Т[АВЕКМНОРСТУХ]{2}\d{3}(?<!000)\d{2,3}$/ui;

  let result = false;
  const error: {
    code: number;
    message: string;
  } = {
    code: 0,
    message: ''
  };

  if (!vehicleNumber.length) {
    error.code = 1;
    error.message = 'Введите номер';
  } else if (
      privateRegExp.test(vehicleNumber) ||
      transportOrtaxiRegExp.test(vehicleNumber) ||
      trailersRegExp.test(vehicleNumber) ||
      motoOrAgriculturalEquipmentRegExp.test(vehicleNumber) || 
      trazitRegExp.test(vehicleNumber) || 
      visitingRegExp.test(vehicleNumber)
    ) {
    result = true;    
  } else {
    error.code = 2;
    error.message = 'Некорректный номер';
  }

  return {
    success: result,
    error
  };
}

export default vehicleNumberValidator;