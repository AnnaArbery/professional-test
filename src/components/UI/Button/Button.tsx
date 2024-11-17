import React from 'react';

import './Button.scss';

type ButtonProps = {
  callback?: () => void;
  addClass?: string;
  children?: React.ReactNode;
};

const Button = ({ callback, children, addClass }: ButtonProps) => (
  <button className={`btn-general${addClass ? ` ${addClass}` : ''}`} onClick={callback}>
    {children}
  </button>
);

export default Button;
