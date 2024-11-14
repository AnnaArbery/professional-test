import React, {useRef, useEffect} from 'react';
import './Checkbox.scss';

const Checkbox = ({value, handleCheckbox, enable, checked, ...props }) => {
  const ref = useRef();
  const setChecked = (e) => {
    const count = ref.current.checked ? 1 : -1;
    if (!enable && count > 0) e.preventDefault();
    handleCheckbox(count, ref.current.value)
  }
  useEffect(() => {
    if(checked) {
      handleCheckbox(1, ref.current.value);
      ref.current.checked = true;
    }
  }, [])

  return (
    <label className='checkbox'>
      <input
        className='checkbox__input'
        type='checkbox'
        onClick={setChecked}
        value={value}
        {...props}
        ref={ref}
      />
      <span className='checkbox__title'>{value}</span>
    </label>
  );
};

export default Checkbox;