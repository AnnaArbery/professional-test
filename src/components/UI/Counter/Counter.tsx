import React, { useState } from 'react';
import './Counter.scss';

type CounterProps = {
  cb: (count: number, sum: number) => void;
  value: number;
};

type ButtonProps = {
  children: React.ReactNode;
  handler: () => void;
};

const Counter = ({ cb, value }: CounterProps) => {
  const [count, setCount] = useState<number>(value || 0);

  const handleCount = (add: number) => () => {
    if (count === 3 && add > 0) return;
    if (count === 0 && add < 0) return;
    setCount(prev => prev + add);
    cb(add, count + add);
  };

  return (
    <div className={`counter${count > 0 ? ' !flex' : ''}`}>
      <Counter.Button handler={handleCount(-1)}>&#45;</Counter.Button>
      <span className="counter__value">{count}</span>
      <Counter.Button handler={handleCount(1)}>&#43;</Counter.Button>
    </div>
  );
};

const Button = ({ children, handler }: ButtonProps) => (
  <button onClick={handler} className="counter__btn">
    {children}
  </button>
);

Counter.Button = Button;

export default Counter;
