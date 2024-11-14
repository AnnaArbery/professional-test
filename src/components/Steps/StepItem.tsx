import React, {useState, useEffect, useRef} from 'react';
import { useDispatch } from 'react-redux'
import { addAnswers, removeAnswers } from '../../store/userSlice'
import StepCard from './StepCard';

const StepItem = ({title, id, desc, questions={}, step}) => {
  const [selected, setSelected] = useState(0);
  const [module, setModule] = useState(1);
  const count = questions.length;
  const {items = [], max, id: idQuestions} = questions[module-1] || {};
  const ref = useRef(null);
  const dispatch = useDispatch();
  
  const handleCheckbox = (count, val) => {
    if (selected === max && count > 0) return;
    setSelected(prev => prev + count);
    if (count > 0) {
      dispatch(addAnswers({id, module, val}))
    } else {
      dispatch(removeAnswers({id, module, val}))
    }
  }
  const handleModule = count => () => {
    setModule(prev => prev + count);
    setSelected(0);
  }

  useEffect(() => {
    setSelected(0);
    setModule(1);
  }, [step])

  return (
    <div>
      <div className='items-center'>
        <span className='bg-brown text-white py-1 px-2 rounded-md mr-2 text-xs'>Модуль {id}</span>
        <h2 className='title-h2 mb-0'>{title}</h2>
      </div>
      <h3 className='w-3/5 italic sm:w-full'>{desc}</h3>

      <div className='text-lg'>
        <div className='text-lg text-right flex justify-end sm:block sm:text-sm'>
          <span className='font-bold text-xl mr-2 sm:text-base'>Вопрос {module} из {count}</span>
          {module > 1 && <button
            className='text-dblue font-bold underline hover:text-brown hover:no-underline transition-colors duration-700 mr-2'
            onClick={handleModule(-1)}
          >Назад</button>}
          {module < count && <button
            className='text-dblue font-bold underline hover:text-brown hover:no-underline transition-colors duration-700'
            onClick={handleModule(1)}
          >Вперед</button>}
        </div> 
        <div className='italic text-right mb-2 text-xs'>Выбрано утверждений <span className='text-brown text-bold'>{selected}</span> из {max} </div>
      </div>

      <div className='card' ref={ref} data-el={step}>
        {items.length && <StepCard
          id={idQuestions}
          items={items}
          enable={max > selected}
          handleCheckbox={handleCheckbox}
          step={step}
          module={module}          
        />}
      </div>
    </div>
  );
};

export default StepItem;