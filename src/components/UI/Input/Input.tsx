import React, { forwardRef } from 'react';
import InputMask from 'react-input-mask';
import './Input.scss';
type InputProps = {
  label: string;
  message: string | null;
  mask?: string;
  placeholder?: string;
};

const Input = forwardRef(({ label, message, mask, ...props }: InputProps, ref) => (
  <div className="field">
    <label className="field__label">{label}</label>
    {/*
      // @ts-ignore */}
    <InputMask {...props} inputRef={ref} mask={mask} type="text" className="field__value" />
    {message && <span className="field__error">{message}</span>}
  </div>
));
Input.displayName = 'Input';

export default Input;
