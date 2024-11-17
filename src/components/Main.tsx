import React from 'react';
import FormRegister from './FormRegister';
import Steps from './Steps/Steps';
import StepLast from './Steps/StepLast';
import { useAppSelector } from '../hooks/useStoreHooks';

const Main = () => {
  const { step } = useAppSelector(state => state.user);

  return (
    <div className="main py-10 flex-1">
      <div className="container">
        {step === 0 && <FormRegister />}
        {step > 0 && step < 6 && <Steps />}
        {step === 6 && <StepLast />}
      </div>
    </div>
  );
};

export default Main;
