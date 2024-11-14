import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux'
import StepItem from './StepItem';

const Steps = () => {
  const {steps} = useSelector(state => state.steps);
  const {step} = useSelector(state => state.user);
  const [current, setCurrent] = useState({})

  useEffect(() => {
    setCurrent(steps[step - 1] )
  }, [step, steps])

  return (
    <StepItem {...current} step={step} />
  );
};

export default Steps;