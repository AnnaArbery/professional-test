import React, { useRef } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Checkbox from '../UI/Checkbox/Checkbox';
import { useAppSelector } from '../../hooks/useStoreHooks';

type StepCardProps = {
  enable: boolean;
  items: string[];
  id: string;
  handleCheckbox: (count: number, val: string) => void;
  step: number;
  module: number;
};

const StepCard = ({ enable, items, id, handleCheckbox, step, module }: StepCardProps) => {
  const answers = useAppSelector(state => state.user.answers);

  return (
    <TransitionGroup>
      {items.map((val: string, idx: number) => {
        const checked =
          answers[step] && answers[step][module] ? answers[step][module].includes(val) : false;
        {
          /*
          const nodeRef = useRef(null);
          nodeRef.current?.
          !! не делать ОШИБКА, создать отдельный компонент - Rendered more hooks than during the previous render...
          */
        }
        return (
          <CSSTransition
            key={`${id}${module}${idx}`}
            classNames="card-checkbox"
            addEndListener={(node, done: () => void) =>
              node.addEventListener('transitionend', done, false)
            }>
            <Checkbox
              handleCheckbox={handleCheckbox}
              enable={enable}
              value={val}
              checked={checked}
            />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

export default StepCard;
