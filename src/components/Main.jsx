import React, {useEffect} from 'react';
import { useSelector } from 'react-redux'
import FormRegister from './FormRegister';
import Steps from './Steps/Steps';
import Table from './Table';


const Main = () => {
  const {step} = useSelector(state => state.user);

  return (
    <div className='main py-10 flex-1'>
      <div className='container'>
        {step === 0 && <FormRegister/>}
        {step > 0 && step < 6 && <Steps/>}
        {step === 6 && <Table/>}
      </div>
    </div>
  )
}

export default Main;