import React from 'react';

const Notes = ({setShowModal}) => (
  <div className='notes'>
    <div className='container'>
      <div className='font-bold text-xl bg-bwhite py-3 rounded-3xl px-5 flex justify-between items-center md:text-lg sm:flex-col sm:items-start'>
        <span>Профессиональный тест - поиск причин выгорания и определение комфортной профессии</span>
        <button
          className='text-sm bg-dblue text-white py-1 px-2 ml-3 hover:bg-brown duration-700 transition-colors rounded-md whitespace-nowrap sm:ml-0 sm:mt-3'
          onClick={() =>setShowModal(true)}
        >О тесте</button>
      </div>
    </div>      
  </div>
)


export default Notes;