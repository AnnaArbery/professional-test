import React, { forwardRef } from 'react';
import InputMask from 'react-input-mask';
import './Input.scss'

const Input = forwardRef( ({label, message, mask, ...props}, ref) => (
  <div className='field'>
    <label className='field__label'>{label}</label>
    <InputMask
      {...props}
      inputRef={ref}
      mask={mask}
      type='text'
      className='field__value'
    />
    {message && <span className='field__error'>{message}</span>}
  </div>
));
Input.displayName = 'Input';

export default Input;