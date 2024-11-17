import React, { useState, useEffect } from 'react';
import StepItem from './StepItem';
import { useAppSelector } from '../../hooks/useStoreHooks';

const Steps = () => {
  const { steps } = useAppSelector(state => state.steps);
  const { step } = useAppSelector(state => state.user);
  const [current, setCurrent] = useState({});

  useEffect(() => {
    setCurrent(steps[step - 1]);
  }, [step, steps]);

  console.log(current);

  return <StepItem {...current} step={step} />;
};

export default Steps;
