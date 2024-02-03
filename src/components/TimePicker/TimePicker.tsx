import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import Picker, { registerLocale } from 'react-datepicker';
import { ru } from 'date-fns/locale';

import MaskedTimeInput from '../MaskedTimeInput/MaskedTimeInput';

import { TimePickerProps } from './TimePicker.model';

import 'react-datepicker/dist/react-datepicker.css';
import './TimePicker.scss';

registerLocale('ru', ru);

const TimePicker: FC<TimePickerProps> = memo((props) => {
  const { product = '', selected, placeholder, name, setupDate, setupRawChange = () => null } = props;

  const [startDate, setStartDate] = useState<Date | null>(selected || null);

  useEffect(() => {
    setupDate(startDate);
  }, [startDate, setupDate]);

  const handleRawChange = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      setupRawChange(event);
    },
    [setupRawChange],
  );

  return (
    <div className={`datepicker ${product}`}>
      <Picker
        locale="ru"
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Время"
        dateFormat="HH:mm"
        selected={startDate}
        onChange={setStartDate}
        onChangeRaw={handleRawChange}
        placeholderText={placeholder}
        shouldCloseOnSelect={false}
        customInput={<MaskedTimeInput />}
        name={name}
      />
    </div>
  );
});

TimePicker.displayName = 'TimePicker';

export default TimePicker;
