import React, { forwardRef } from 'react';
import MaskedInputPackage from 'react-text-mask';

import { DATE_MASK } from './MaskedInput.const';

import s from './MaskedInput.module.scss';

const MaskedInput = forwardRef((props: React.HTMLProps<HTMLInputElement>, ref: React.Ref<HTMLInputElement>) => {
  const { onClick, placeholder, value, onChange, onKeyDown, disabled } = props;

  return (
    <div
      ref={ref}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={() => null}
      className={s.masked}
      aria-label="onClick"
    >
      <MaskedInputPackage
        mask={DATE_MASK}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        disabled={disabled}
      />
    </div>
  );
});

MaskedInput.displayName = 'MaskedInput';

export default MaskedInput;
