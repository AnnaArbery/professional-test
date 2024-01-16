import React from 'react';
import { useSelector } from 'react-redux'

const defineValue = (val, name) => {
  if (name === 'sex') return (name === 'male') ? 'Мужской':'Женский';
  if (name === 'status') return (name === 'manager') ? 'Управление':'Исполнение';
  if (name === 'date') {
    const date = new Date(val);
    const day = date.getDay();
    const month = date.getMonth() + 1;
    return `${day > 9 ? day : `0${day}`}.${month > 9 ? month : `0${month}`}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  }
  return val;
}

const UserDate = () => {
  const {user, answers} = useSelector(state => state.user);
  const titles = {
    'name': 'Имя',
    'email': 'Email',
    'sex': 'Пол',
    'year':'Год рождения',
    'status': 'Круг обязанностей',
    'date': 'Дата заполнения'
  }
  const keysUser = Object.keys(user);
  const keysSteps = Object.keys(answers);

  return (
    <div>
      <div>
        <h2 className='title-h2'>Регистрационные данные</h2>
        {keysUser && keysUser.map( (value, idx) => (
          <div className='flex py-2 border-b border-b-brown border-1 sm:block' key={value}>
            <span className='block w-[200px] font-bold text-brown'>{titles[value]}:</span>
            <span>{defineValue(user[value], value)}</span>
          </div>)
        )}
      </div>
      <div className='mt-8'>
        <h2 className='title-h2'>Ответы на вопросы</h2>
        {keysSteps && keysSteps.map( (value) => (
          <div className='py-2 border-b border-b-brown border-1' key={value}>
            <span className='block w-[200px] font-bold text-brown'>Модуль {value}</span>
            <div>
              { Object.keys(answers[value]).map(module => (
                <div key={module} className='ml-4 mb-2 sm:ml-0'>
                  <span className='block font-bold underline text-sm text-brown'>Вопрос {module}: </span>
                  <span>{answers[value][module].length > 0 && answers[value][module].map(answer => (
                    <div key={answer} className='ml-1 italic sm:ml-0'>- {answer}</div>
                  ))}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDate;