import React, {useState, forwardRef} from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
registerLocale('ru', ru)
import './Datepicker.scss';

const Datepicker = (props) => (
  <div className='field'>
    <label className='field__label'>Дата заполнения</label>
    <DatePicker
      locale='ru'
      dateFormat='dd.MM.yyyy'
      customInput={<Datepicker.Input />}
      {...props}
    />
  </div>
);

Datepicker.Input = React.forwardRef((props, ref) => (
  <input
    ref={ref}
    {...props}
    className='field__value'
  />    
));
Datepicker.Input.displayName = 'DatepickerInput';

export default Datepicker;