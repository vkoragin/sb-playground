import React, { forwardRef } from 'react';
import MaskedInputPackage from 'react-text-mask';

import { TIME_MASK } from './MaskedTimeInput.const';

import s from './MaskedTimeInput.module.scss';

const MaskedTimeInput = forwardRef((props: React.HTMLProps<HTMLInputElement>, ref: React.Ref<HTMLInputElement>) => {
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
        mask={TIME_MASK}
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

MaskedTimeInput.displayName = 'MaskedTimeInput';

export default MaskedTimeInput;
