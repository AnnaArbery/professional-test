import React from 'react';
import FormRegister from './FormRegister';

const Main = () => {
  return (
    <div className='main py-10 flex-1'>
      <div className='container'>
        <h1 className='font-bold text-5xl mb-7 text-dblue'>Заполните анкету</h1>
        <FormRegister/>
      </div>
    </div>
  )
}

export default Main;