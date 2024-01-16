import React, {useState} from 'react';
import './Counter.scss'

const Counter = ({cb}) => {
  const [count, setCount] = useState(0);

  const handleCount = add => () => {
    if ( count === 3 && add > 0 ) return;
    if ( count === 0 && add < 0 ) return;
    setCount(prev => prev + add)
    cb(add)
  }

  return (
    <div className={`counter${count > 0 ? ' !flex': ''}`}>
      <Counter.Button handler={handleCount(-1)}>&#45;</Counter.Button>
      <span className='counter__value'>{count}</span>
      <Counter.Button handler={handleCount(1)}>&#43;</Counter.Button>
    </div>
  );
};

const Button = ({children, handler}) => <button onClick={handler} className='counter__btn'>{children}</button>

Counter.Button = Button;

export default Counter;