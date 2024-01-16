import React, {useState, useRef} from 'react';
import useClickOutside from '../../../hooks/useClickOutside'
import './Dropdown.scss'
import {ReactComponent as ArrowDown} from './arrow-down.svg'

const Dropdown = ({title, list, cb}) => {
  const clickRef = useRef();
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState(null);
  useClickOutside(clickRef, setOpen);

  const handleClick = (idx) => () => {
    setCurrent(idx);
    if(cb) cb(idx);
  }

  return (
    <div className={`dropdown${current !== null  ?' dropdown--active':''}`} ref={clickRef}>
      <button className='dropdown__title' onClick={() => setOpen(prev => !prev)}>
        <div className='flex justify-between items-center'>{title} <ArrowDown className='dropdown__svg'/></div>
        {current !== null && <span className='text-dblue font-bold'>{list[current]}</span>}        
      </button>
      {open && <div className='dropdown__list'>
        <div className='dropdown__wrap'>
          {list.map((val,idx) => <button key='val' className={`dropdown__item${current === idx ? ' dropdown__item--active': ''}`} onClick={handleClick(idx)}>{val}</button>)}
        </div>
      </div>}
    </div>
  );
};

export default Dropdown;