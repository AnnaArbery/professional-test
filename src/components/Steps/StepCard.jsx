import React from 'react';
import { useSelector } from 'react-redux';
import Checkbox from '../UI/Checkbox/Checkbox';

const StepCard = ({enable, items, id, handleCheckbox, step, module}) => {
  const answers = useSelector(state => state.user.answers);

  return (
    <>
      {items.map((val, idx) => {
        const checked = (answers[step] && answers[step][module])
          ? answers[step][module].includes(val)
          : false;
        return (<Checkbox
          handleCheckbox={handleCheckbox}
          enable={enable}
          value={val}
          checked={checked}
          key={`${id}${module}${idx}`}
        />)
      })}
    </>
  );
};

export default StepCard;