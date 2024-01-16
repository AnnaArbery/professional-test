import React from 'react';
import { useSelector } from 'react-redux'
import FormRegister from './FormRegister';
import Steps from './Steps/Steps';
import StepLast from './Steps/StepLast';


const Main = () => {
  const {step} = useSelector(state => state.user);

  return (
    <div className='main py-10 flex-1'>
      <div className='container'>
        {step === 0 && <FormRegister/>}
        {step > 0 && step < 6 && <Steps/>}
        {step === 6 && <StepLast/>}
      </div>
    </div>
  )
}

export default Main;