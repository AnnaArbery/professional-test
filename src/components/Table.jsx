import React, {useState} from 'react';
import Button from './UI/Button/Button'
import Modal from './UI/Modal/Modal';
import UserCheck from './UserCheck';

const Table = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <div>
      

      <div className='flex justify-end'>
        <Button callback={() =>setShowModal(true)}>Проверить</Button>
        <Button addClass='ml-2'>Отправить</Button>
      </div>

      {showModal && <Modal showModal={showModal} setShowModal={() => setShowModal(false)} renderContent={UserCheck} />}
    </div>
  );
};

export default Table;