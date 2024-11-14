import React from 'react';

import './Button.scss'

const Button = ({callback, children, addClass}) => (
  <button
    className={`btn-general${addClass ?` ${addClass}`:''}`}
    onClick={callback}
  >{children}</button>
);

export default Button;