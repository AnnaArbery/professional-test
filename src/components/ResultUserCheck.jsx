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
  const {user, answers, needs, employment, employmentTitle} = useSelector(state => state.user);
  const {titles: titlesDefault = [], employment: employmentList = []} = useSelector(state => state.content);
  const {tabs = []} = useSelector(state => state.tabs);

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
  const keysNeeds = Object.keys(needs);
  const tabsNeeds = tabs.reduce((acc, {id, tab}) => {
    acc[id] = tab
    return acc;
  }, {})

  return (
    <div>
      <div>
        <h2 className='title-h2'>Регистрационные данные</h2>
        {keysUser && keysUser.map( value => 
          <div className='flex py-2 border-b border-b-brown border-1 sm:block' key={value}>
            <span className='block w-[200px] font-bold text-brown'>{titles[value]}:</span>
            <span>{defineValue(user[value], value)}</span>
          </div>
        )}
      </div>

      {keysSteps.length > 0 &&
        <div className='mt-10'>
          <h2 className='title-h2'>Ответы на вопросы</h2>
          {keysSteps.map(value => (
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
      }

      {keysNeeds.length > 0 &&
        <div className='mt-10'>
          <h2 className='title-h2'>Таблица потребностей</h2>
          {keysNeeds.map(value => 
            <div className='flex py-2 justify-between border-b border-b-brown border-1 sm:block' key={value}>
              <span className='block font-bold text-brown'>{tabsNeeds[value]}</span>
              <span>{needs[value]}</span>
            </div>            
          )}
        </div>
      }

      {keysNeeds.length > 0 && 
        <div className='mt-10'>
          <h2 className='title-h2'>Таблица профессий</h2>
          {employment.map((value, idx) => {
            if (value === 0) return false;
            return (
              <div className='flex py-2 justify-between border-b border-b-brown border-1 sm:block' key={idx}>
                <span className='block font-bold text-brown'>{employmentTitle[idx] || titlesDefault[idx]}</span>
                <span>{value}</span>
              </div>
            )}
          )}
        </div>
      }

    </div>
  );
};

export default UserDate;