import React, {useState} from 'react';
import Button from '../UI/Button/Button'
import Modal from '../UI/Modal/Modal';
import ResultUserCheck from '../ResultUserCheck';
import Table from '../Table/Table';

const StepLast = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <h2 className='title-h2 mb-0 max-w-3xl'>Сопоставление профессии с внутренними потребностями личности</h2>
      <h3 className='w-4/5 italic sm:w-full'>
        Была ли изначальный выбор профессионального пути верен или в другой сфере вы проявитесь лучше и будете менее подвержены выгоранию.
        Оцените по шкале от 0 до 3 насколько та или иная потребность проявляется у вас в текущей и желаемых сферах деятельности, соответствует ли описанное поведение вашему.
      </h3>
      
      <Table/>      

      <div className='flex justify-end'>
        <Button callback={() =>setShowModal(true)}>Проверить</Button>
        <Button addClass='ml-2'>Отправить</Button>
      </div>

      {showModal && <Modal showModal={showModal} setShowModal={() => setShowModal(false)} renderContent={ResultUserCheck} />}
    </div>
  );
};

export default StepLast;