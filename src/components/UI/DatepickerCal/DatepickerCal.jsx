import React, {useEffect, useRef, useState} from 'react';
import './DatepickerCal.scss';
import useScript from '../../../hooks/useScript'

const DatepickerCal = props => (
  <div className='field'>
    <label className='field__label'>Дата заполнения</label>
    <DatepickerCal.Input {...props}/>
  </div>
);

const Input = ({selected, onChange, inputRef }) => {
  const ref = useRef(e => inputRef(e));
  const refDatePick = useRef();
  const [show, setShow] = useState(false);
  const statusScript = useScript('https://cdn.jsdelivr.net/npm/simple-jscalendar@1.4.5/source/jsCalendar.min.js')

  const handleChange = () => {
    const [day, month, year] = ref.current.value.split('.');
    const date = new Date();
    date.setDate(day);
    date.setMonth(month - 1);
    date.setFullYear(year)
    onChange(+date);
  };

  const setDateStr = (date) => {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    day = day < 10 ? `0${day}` : day;
    month = month < 10 ? `0${month}` : month;
    return `${day}.${month}.${date.getFullYear()}`;
  }
  
  useEffect(() => {
    ref.current.value = setDateStr(new Date(selected));
    if (statusScript === 'ready') {
      const calendar = window.jsCalendar.new({
        target : refDatePick.current,
        date : new Date(selected),
        navigator : true,
        navigatorPosition : 'right',
        zeroFill : true,
        monthFormat : 'month',
        dayFormat : 'DD',
        language : 'ru'
      });

      calendar.onDateClick((_, date) => {
        ref.current.value = setDateStr(date);
        calendar.set(date);
        setShow(false)
        handleChange()
      });
    }
  }, [statusScript])

  return (
    <>
      <input onClick={() => setShow(prev => !prev)} className='field__value' ref={ref}/>    
      <div className={show ? '' : 'hidden-datapicker'}>
        <div ref={refDatePick}></div>
      </div>
    </>
  )
};

DatepickerCal.Input = Input;
DatepickerCal.Input.displayName = 'DatepickerCalInput';

export default DatepickerCal;