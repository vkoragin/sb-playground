import React, { FC, memo, useCallback, useMemo, useRef, useState } from 'react';
import cn from 'classnames';

import useClickOutside from '../../hooks/useClickOutside';
import Icon from '../Icon/Icon';

import { ISelectProps, MultipleOption } from './SelectProps.model';

import s from './Select.module.scss';

const Select: FC<ISelectProps> = memo((props) => {
  const {
    options,
    title,
    subTitle,
    onSelect,
    isMultiple = false,
    isDisabled = false,
    errorMessage = '',
    warningMessage = '',
    iconName = '',
    product,
    iconStroke,
    iconFill,
    dropDirection = 'down',
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const selected = useMemo<MultipleOption[]>(() => options.filter((opt) => opt.isSelected), [options]);

  useClickOutside(ref, () => setIsOpen(false));

  const handleOptionClick = useCallback(
    (option: MultipleOption) => {
      const newOptions = options.map((o) => {
        const newOption = { ...o };
        if (!isMultiple) {
          newOption.isSelected = false;
        }
        if (newOption.value === option.value) {
          newOption.isSelected = !newOption.isSelected;
        }
        return newOption;
      });

      onSelect(newOptions);
      return isMultiple || setIsOpen(false);
    },
    [isMultiple, options, onSelect],
  );

  const handleTitleClick = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const isAlertsVisible = useMemo(
    () => !(isOpen || (!errorMessage && !warningMessage)),
    [errorMessage, isOpen, warningMessage],
  );

  const isDropDirectionUp = dropDirection === 'up';

  return (
    <div className={cn(s.select, { [s.disabled]: isDisabled, [product]: product })} ref={ref}>
      <div
        className={cn(s.top, {
          [s.disabled]: isDisabled,
          [s.warning]: warningMessage,
          [s.error]: errorMessage,
          [product]: product,
        })}
        role="button"
        onClick={handleTitleClick}
        onKeyDown={() => null}
        tabIndex={0}
      >
        <div className={s.top_left}>
          {iconName && (
            <div className={s.top_leftIcon}>
              <Icon name={iconName} product={product} iconStroke={iconStroke} iconFill={iconFill} />
            </div>
          )}
        </div>

        <div className={s.top_center}>
          <div
            className={cn(s.top_title, {
              [s.completed]: !!selected.length,
            })}
          >
            {title}
          </div>
          <div
            className={cn(s.top_subTitle, {
              [s.completed]: !!selected.length,
            })}
          >
            {!selected.length ? subTitle : selected?.map((sel) => sel.text).join(', ')}
          </div>
        </div>

        <div
          className={cn(s.top_icon, {
            [s.top_icon__opened]: isOpen && !isDisabled,
          })}
        >
          <Icon name="arrowDown" product={product} iconStroke={iconStroke} iconFill={iconFill} />
        </div>
      </div>

      {isAlertsVisible && (
        <div
          className={cn(s.alerts, {
            [s.alerts_error]: errorMessage,
            [s.alerts_warning]: warningMessage,
          })}
        >
          {!!errorMessage && errorMessage}
          {!!warningMessage && warningMessage}
        </div>
      )}

      {isOpen && !isDisabled && (
        <div
          className={cn(s.options_container, {
            [s.options_container_up]: isDropDirectionUp,
          })}
        >
          <div
            className={cn(s.options, {
              [s.options_up]: isDropDirectionUp,
            })}
          >
            {options.map(({ value, text, isSelected }) => (
              <div
                key={value}
                className={cn(s.option, {
                  [s.option_selected]: isSelected,
                })}
                onClick={() => handleOptionClick({ value, text, isSelected })}
                role="button"
                onKeyDown={() => null}
                tabIndex={0}
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

Select.displayName = 'Select';

export default Select;
