import React, {useState, forwardRef, useEffect, useRef, useCallback} from 'react';
import flatpickr from 'flatpickr';
// import DatePicker, { registerLocale } from 'react-datepicker';
// import ru from 'date-fns/locale/ru';
// registerLocale('ru', ru)
import './DatepickerCal.scss';
import useScript from '../../../hooks/useScript'



const DatepickerCal= ({value, onChange, ...rest}) => {
  const setDate = useCallback(d => {
    const date = new Date(d);
    const day = date.getDay();
    const month = date.getMonth() + 1;
    console.log(day, month, date.getFullYear())
    return `${day < 10 ? `0${day}` : day}.${month < 10 ? `0${month}` : month}.${date.getFullYear()}`
  }, [])
  // value = setDate(value);
// const DatepickerCal= (props) => {
  // const refInput = useRef();


  // console.log(rest)
  const handleChange = (e) => {
    const value = e.target.value;
    onChange(value);
  };



  return (
    <div className='field'>
      <label className='field__label'>Дата заполнения</label>
      {/* <Input {...props} /> */}
      <input onChange={handleChange} value={value} {...rest}/>
      {/*<DatepickerCal.Input ref={ref} {...props}/>*/ }
  </div>
)};

// const Input = ({value, onChange, ...rest}) => {
//   const refInput = useRef();
//   useEffect(() => {
//     // console.log(refInput, 'fgff')
//     flatpickr(refInput.current, {
//       dateFormat: 'd.m.Y',
//       onChange: (selectedDates, dateStr, instance) => {
//         // console.log(selectedDates, dateStr, instance)
//         onChange(value);
//       },
//     });
//   }, [])

//   const handleChange = (e) => {
//   //   const value = refInput.value;
//   //   onChange(value);
//   };
//   const setDate = d => {
//     const date = new Date(d);
//     const day = date.getDay();
//     const month = date.getMonth() + 1;
//     return `${day < 10 ? `0${day}` : day}.${month < 10 ? `0${month}` : month}.${date.getFullYear()}`
//   }
//   return (
//     <input onChange={handleChange} value={setDate(value)} {...rest} ref={refInput} />
//   )
// };


// const DatepickerCal= forwardRef((props, ref) => {
//   console.log(ref)
//   return (
//     <div className='field'>
//       <label className='field__label'>Дата заполнения</label>
//       <input {...props} onInput={() => console.log(ref?.current?.value)}  ref={ref}/>
//       {/*<DatepickerCal.Input ref={ref} {...props}/>*/ }
//   </div>
// )});


// const DatepickerCal = forwardRef( (props, ref) => console.log(ref) || (
//   <div className='field'>
//     <label className='field__label'>Дата заполнения</label>
//     <DatepickerCal.Input ref={ref} {...props}/>
//     {/* <DatePicker
//       locale='ru'
//       dateFormat='dd.MM.yyyy'
//       customInput={<Datepicker.Input />}
//       {...props}
//     /> */}
//   </div>
// ));

/*
const DatepickerCal = ({...props}) => (
  <div className='field'>
    <label className='field__label'>Дата заполнения</label>
    <DatepickerCal.Input {...props}/>
    {<DatePicker
      locale='ru'
      dateFormat='dd.MM.yyyy'
      customInput={<Datepicker.Input />}
      {...props}
    /> }
  </div>
);

const Input = ({ ...props }) => {
  const refInput = useRef();

  console.log(props);

  useEffect(() => {
    flatpickr(refInput.current, {
      dateFormat: 'd.m.Y',
    });
  }, [])
  const handleChange = () => {
    console.log(refInput.current.value)
    // console.log(props.onChange)
    // props.onChange(+new Date(refInput.current.value))
  }

  const setDated = d => {
    const date = new Date(d);
    const day = date.getDay();
    const month = date.getMonth() + 1;

    return `${day < 10 ? `0${day}` : day}.${month < 10 ? `0${month}` : month}.${date.getFullYear()}`
  }

  return (
    <input
      ref={refInput}
      {...props}
      onInput={handleChange}
      value={setDated(props.selected)}
      className='field__value'
    />    
  )
  
};
*/

// DatepickerCal.Input = Input;
// DatepickerCal.Input.displayName = 'DatepickerInput';

export default DatepickerCal;

/*
const DatepickerCal= forwardRef((props, ref) => {
  return (
  <div className='field'>
    <label className='field__label'>Дата заполнения</label>
    <input ref={ref} {...props} onInput={() => console.log(ref?.current?.value)}/>
    {<DatepickerCal.Input ref={ref} {...props}/>     }
    </div>
    )});
    
    const Input = forwardRef((props, ref) => {
      // console.log(ref.current)
      useEffect(() => {
        // console.log(ref, 'fgff')
        // flatpickr(ref.current, {
        //   dateFormat: 'd.m.Y',
        // });
      }, [])
      const setDated = d => {
        // console.log(ref.current)
        const date = new Date(d);
        const day = date.getDay();
        const month = date.getMonth() + 1;
    
        return `${day < 10 ? `0${day}` : day}.${month < 10 ? `0${month}` : month}.${date.getFullYear()}`
      }
    
      return (
        <input
          ref={props.inputRef}
          // {...props}
          onChange={props.onChange}
          value={setDated(props.selected)}
          className='field__value'
        />    
      )
    });
*/