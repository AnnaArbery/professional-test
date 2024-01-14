import React from 'react';
import { useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Checkbox from '../UI/Checkbox/Checkbox';

const StepCard = ({enable, items, id, handleCheckbox, step, module}) => {
  const answers = useSelector(state => state.user.answers);

  return (
    <TransitionGroup>            
      {items.map((val, idx) => {
        const checked = (answers[step] && answers[step][module])
          ? answers[step][module].includes(val)
          : false;
        return (
          <CSSTransition
            key={`${id}${module}${idx}`}
            classNames='card-checkbox'
            addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}
          >
            <Checkbox
              handleCheckbox={handleCheckbox}
              enable={enable}
              value={val}
              checked={checked}                        
            />
          </CSSTransition>
        )
      })}
    </TransitionGroup>
  );
};

export default StepCard;