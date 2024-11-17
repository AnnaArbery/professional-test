import React, { useRef, useEffect, MouseEvent } from 'react';
import './Checkbox.scss';

type CheckboxProps = {
  value: string;
  handleCheckbox: (count: number, value: string) => void;
  enable: boolean;
  checked: boolean;
};

const Checkbox = ({ value, handleCheckbox, enable, checked, ...props }: CheckboxProps) => {
  const ref = useRef<HTMLInputElement>();
  const setChecked = (e: MouseEvent<HTMLInputElement>) => {
    const count = ref.current.checked ? 1 : -1;
    if (!enable && count > 0) e.preventDefault();
    handleCheckbox(count, ref.current.value);
  };
  useEffect(() => {
    if (checked) {
      handleCheckbox(1, ref.current.value);
      ref.current.checked = true;
    }
  }, []);

  return (
    <label className="checkbox">
      <input
        className="checkbox__input"
        type="checkbox"
        onClick={setChecked}
        value={value}
        {...props}
        ref={ref}
      />
      <span className="checkbox__title">{value}</span>
    </label>
  );
};

export default Checkbox;
