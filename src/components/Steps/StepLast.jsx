import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clear } from '../../store/userSlice'
import Button from '../UI/Button/Button'
import Modal from '../UI/Modal/Modal';
import ResultUserCheck from '../ResultUserCheck';
import Table from '../Table/Table';
import { loginAnonymously } from '../../firebase/authController';
import { addData } from '../../firebase/dataController';

const StepLast = () => {
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState(null);
  const user = useSelector(state => state.user);
  // const dispatch = useDispatch();
  const handleSubmit = async () => {
    try {
      const res = await loginAnonymously();
      const { uid } = res.user;

      addData(uid, {
        ...user,
        create: +new Date()
      });

      // console.log(user);
      // dispatch(clear());
    } catch(err) {
      console.log(err.message)
    }
  }

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
        <Button addClass='ml-2' callback={() =>handleSubmit()}>Отправить</Button>
      </div>

      {showModal && <Modal showModal={showModal} setShowModal={() => setShowModal(false)} renderContent={ResultUserCheck} />}
    </div>
  );
};

export default StepLast;