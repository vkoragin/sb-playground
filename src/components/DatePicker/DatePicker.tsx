import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import Picker, { registerLocale } from 'react-datepicker';
import { ru } from 'date-fns/locale';

import MaskedInput from '../MaskedInput/MaskedInput';
import Icon from '../Icon/Icon';

import MONTHS from './DatePicker.const';
import { DatePickerProps, RenderCustomHeaderParams } from './DatePicker.model';

import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.scss';

registerLocale('ru', ru);

const DatePicker: FC<DatePickerProps> = memo((props) => {
  const {
    product = '',
    selected,
    placeholder,
    name,
    setupDate,
    minDate = null,
    maxDate = new Date(),
    setupRawChange = () => null,
    popperPlacement = 'bottom-start',
  } = props;

  const [startDate, setStartDate] = useState<Date | null>(selected || null);

  const [isMonthsPickerVisible, setIsMonthsPickerVisible] = useState(false);

  const [isYearsPickerVisible, setIsYearsPickerVisible] = useState(false);

  const toggleMonthsPicker = useCallback(() => {
    setIsYearsPickerVisible(false);
    setIsMonthsPickerVisible((prev) => !prev);
  }, []);

  const toggleYearsPicker = useCallback(() => {
    setIsMonthsPickerVisible(false);
    setIsYearsPickerVisible((prev) => !prev);
  }, []);

  useEffect(() => {
    setupDate(startDate);
  }, [startDate, setupDate]);

  const handleRawChange = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      setupRawChange(event);
    },
    [setupRawChange],
  );

  const handleCalendarClose = useCallback(() => {
    setIsMonthsPickerVisible(false);
    setIsYearsPickerVisible(false);
  }, []);

  const renderCustomHeader = ({
    date,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }: RenderCustomHeaderParams) => (
    <div className={`datepicker__customHeader ${product}`}>
      <button
        type="button"
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
        className="datepicker__customHeaderLeft"
        aria-label="decreaseMonth"
      >
        <Icon name="arrowLeft" product="gosotchet" theme="info" />
      </button>
      <div className="datepicker__customHeaderCenter">
        <button type="button" onClick={toggleMonthsPicker} className="datepicker__customHeaderMonth">
          {MONTHS[date.getMonth()]}
        </button>

        <button type="button" onClick={toggleYearsPicker} className="datepicker__customHeaderYear">
          {date.getFullYear()}
        </button>
      </div>
      <button
        type="button"
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
        className="datepicker__customHeaderRight"
        aria-label="increaseMonth"
      >
        <Icon name="arrowLeft" product="gosotchet" theme="info" />
      </button>
    </div>
  );

  return (
    <div className={`datepicker ${product}`}>
      <Picker
        locale="ru"
        dateFormat="dd.MM.yyyy"
        popperPlacement={popperPlacement}
        selected={startDate}
        onChange={setStartDate}
        onChangeRaw={handleRawChange}
        placeholderText={placeholder}
        todayButton={isMonthsPickerVisible || isYearsPickerVisible ? undefined : 'Сегодня'}
        showMonthYearPicker={isMonthsPickerVisible}
        showFullMonthYearPicker={isMonthsPickerVisible}
        showYearPicker={isYearsPickerVisible}
        shouldCloseOnSelect={false}
        customInput={<MaskedInput />}
        renderCustomHeader={renderCustomHeader}
        name={name}
        minDate={minDate}
        maxDate={maxDate}
        onCalendarClose={handleCalendarClose}
      />
    </div>
  );
});

DatePicker.displayName = 'DatePicker';

export default DatePicker;
