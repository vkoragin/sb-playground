import moment from 'moment';
import cn from 'classnames';
import React, { FC, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import Icon from '../Icon/Icon';
import TimePicker from '../TimePicker/TimePicker';

import { FIRST_TIME, INPUT_LENGTH } from './TimeInput.const';

import { TimeInputProps, TypingStatuses } from './TimeInputProps.model';

import s from './TimeInput.module.scss';

const TimeInput: FC<TimeInputProps> = memo((props) => {
  const {
    valueFrom,
    valueTo,
    product = 'default',
    label = 'Период',
    nameFrom = '',
    placeholderFrom = FIRST_TIME,
    warningMsg = '',
    errorMsg = '',
    isDisabled = false,
    onChange = () => null,
  } = props;

  const [dateFrom, setDateFrom] = useState(valueFrom || '');
  const [dateTo, setDateTo] = useState(valueTo || '');
  const [isInputsVisible, setIsInputsVisible] = useState(false);

  const ref = useRef(null);

  const typingStatus = useMemo<TypingStatuses>(() => {
    const allLength = dateFrom.match(/\d/g)?.length ?? 0;
    const maxLength = INPUT_LENGTH;

    if (allLength > 0 && allLength < maxLength) {
      return 'typing';
    }
    if (allLength === maxLength) {
      return 'complete';
    }
    return 'default';
  }, [dateFrom]);

  const handleClick = useCallback(() => {
    if (!isDisabled) setIsInputsVisible(true);
  }, [isDisabled]);

  const handleChangeFrom = useCallback((date: Date | null) => {
    setDateFrom(date ? moment(new Date(date)).format('HH:mm') : '');
  }, []);

  const handleTypingFrom = useCallback((event: React.FocusEvent<HTMLInputElement, Element>) => {
    if (!event.target.value) return;
    setDateFrom(event.target.value);
  }, []);

  const selectedDate = useMemo(() => {
    if (valueFrom) {
      const [h, m] = valueFrom.split(':');
      const date = new Date();
      date.setHours(Number(h), Number(m));
      return date;
    }
    return new Date();
  }, [valueFrom]);

  const handleClear = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setDateFrom('');
    setDateTo('');
  }, []);

  useEffect(() => {
    if (dateFrom || dateTo) {
      setIsInputsVisible(true);
    }
    if (!dateFrom && !dateTo) {
      setIsInputsVisible(false);
    }
  }, [dateFrom, dateTo]);

  useEffect(() => {
    onChange({
      from: dateFrom,
      to: dateTo,
    });
  }, [dateFrom, dateTo, onChange]);

  return (
    <div
      className={cn(s.timeInput, {
        [s.error]: errorMsg,
        [s.warning]: warningMsg,
        [s.disabled]: isDisabled,
        [product]: product,
        [s.typingStatus__default]: typingStatus === 'default',
        [s.typingStatus__typing]: typingStatus === 'typing' && isInputsVisible,
        [s.typingStatus__cpomplete]: typingStatus === 'complete',
      })}
    >
      <div ref={ref} className={s.inputs} onClick={handleClick} role="button" onKeyDown={() => null} tabIndex={0}>
        <div className={s.left}>
          <Icon name="clock" product={product} />
        </div>

        <div className={s.center}>
          <div className={s.title}>{label}</div>

          {isInputsVisible && (
            <div className={s.dates}>
              <TimePicker
                product={product}
                selected={dateFrom === '' ? null : selectedDate}
                placeholder={placeholderFrom}
                name={nameFrom}
                setupDate={handleChangeFrom}
                setupRawChange={handleTypingFrom}
              />
            </div>
          )}
        </div>

        {(warningMsg || errorMsg) && (
          <div className={s.right}>
            {errorMsg && <Icon name="exclamation" product="gosotchet" theme="error" />}

            {warningMsg && <Icon name="exclamationTriangle" product="gosotchet" theme="warning" />}
          </div>
        )}

        {(!!dateFrom || !!dateTo) && (
          <button type="button" className={cn(s.clear)} onClick={handleClear} aria-label="handleClear">
            <Icon name="plus" product="gosotchet" />
          </button>
        )}
      </div>

      {(warningMsg || errorMsg) && (
        <div className={s.messages}>
          {warningMsg && <div className={s.messages_warning}>{warningMsg}</div>}
          {errorMsg && <div className={s.messages_error}>{errorMsg}</div>}
        </div>
      )}
    </div>
  );
});

TimeInput.displayName = 'TimeInput';

export default TimeInput;
