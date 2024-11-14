import React from 'react';

import './RadioGroup.scss';

const RadioGroup = ({label, children}) => (
  <div className='radio-group'>
    <div className='radio-group__title'>{label}</div>
    <div className='radio-group__items'>{children}</div>
  </div>
);

const Button = ({title, ...props}) => (
  <label className='radio-group__name'>
    <input
      type='radio'
      className='radio-group__radio'
      {...props}
    />
    <span className='radio-group__status'>{title}</span>
  </label>
)

RadioGroup.Button = Button;
RadioGroup.displayName = 'RadioGroup';
RadioGroup.Button.displayName = 'RadioButton';

export default RadioGroup;