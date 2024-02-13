import React, {useState, forwardRef, useEffect, useRef, useCallback} from 'react';
import flatpickr from 'flatpickr';
// import DatePicker, { registerLocale } from 'react-datepicker';
// import ru from 'date-fns/locale/ru';
// registerLocale('ru', ru)
import './DatepickerCal.scss';

const DatepickerCal= props => (
  <div className='field'>
    <label className='field__label'>Дата заполнения</label>
    <DatepickerCal.Input {...props}/>
  </div>
);

const Input = ({selected, onChange, inputRef }) => {
  const ref = useRef(e => inputRef(e));

  const handleChange = () => {
    const [day, month, year] = ref.current.value.split('.');
    const date = new Date();
    date.setDate(day);
    date.setMonth(month - 1);
    date.setFullYear(year)
    onChange(+date);
  };
  useEffect(() => {
    flatpickr(ref.current, {
      dateFormat: 'd.m.Y',
      maxDate: '15.12.2040',
      defaultDate: selected
    });
  }, [selected])

  return (
    <input onInput={handleChange} className='field__value' ref={ref}/>
  )
};

DatepickerCal.Input = Input;
DatepickerCal.Input.displayName = 'DatepickerCalInput';

export default DatepickerCal;