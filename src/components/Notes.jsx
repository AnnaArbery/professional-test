import React from 'react';

const Notes = () => {
  return (
    <div className='notes'>
      <div className='container'>
        <div className='font-bold text-xl bg-bwhite py-3 rounded-3xl px-5 flex justify-between items-center'>
          <span>Профессиональный тест - найти причину выгорания и определиться с выбором новой профессии</span>
          <a href='' className='text-sm notes__link bg-dblue text-white py-1 px-2 hover:bg-brown duration-700 transition-colors rounded-md'>О тесте</a>
        </div>
      </div>      
    </div>
  )
}

export default Notes;