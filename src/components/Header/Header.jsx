import React from 'react';
import {ReactComponent as Hat} from './hat.svg'
import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <div className='flex py-7 items-center justify-between md:flex-col'>
          <a href='' className='flex text-brown align-center'>
            <Hat className='w-8 fill-brown mr-1 py'/>
            <h3 className='font-bold uppercase text-xl'>Proftest</h3>
          </a>
          <nav className='md:pt-4'>
            <ul className='flex aligin-center header__steps'>
              <li className='btn-round btn-round--complete'></li>
              <li className='btn-round btn-round--complete'></li>
              <li className='btn-round btn-round--checked'></li>
              <li className='btn-round btn-round--able'></li>
              <li className='btn-round'></li>
              <li className='btn-round'></li>
              <li className='btn-round'></li>
            </ul>
          </nav>
        </div>
      </div>
      
    </div>
  )
}

export default Header;