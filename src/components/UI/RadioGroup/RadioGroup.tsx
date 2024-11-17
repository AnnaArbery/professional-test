import React, { ReactNode } from 'react';

import './RadioGroup.scss';

type RadioGroupProps = {
  label: string;
  children?: ReactNode;
};
type ButtonProps = {
  title: string;
  name?: string;
  onChange: () => void;
  value: string;
  checked: boolean;
};

const RadioGroup = ({ label, children }: RadioGroupProps) => (
  <div className="radio-group">
    <div className="radio-group__title">{label}</div>
    <div className="radio-group__items">{children}</div>
  </div>
);

const Button = ({ title, ...props }: ButtonProps) => (
  <label className="radio-group__name">
    <input type="radio" className="radio-group__radio" {...props} />
    <span className="radio-group__status">{title}</span>
  </label>
);

RadioGroup.Button = Button;
RadioGroup.displayName = 'RadioGroup';
RadioGroup.Button.displayName = 'RadioButton';

export default RadioGroup;
