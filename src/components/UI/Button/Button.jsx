import React from 'react';

import './Button.scss'

const Button = ({children}) => {
  return (
    <button className='btn-general'>{children}</button>
  );
};

export default Button;