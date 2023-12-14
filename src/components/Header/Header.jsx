import React from 'react';
import {ReactComponent as Hat} from './hat.svg'

const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <div className='flex py-4 items-center justify-between'>
          <a href='' className='flex text-green align-center'>
            <Hat className='w-8 fill-green mr-1 py'/>
            <h3 className='font-bold uppercase'>Proftest</h3>
          </a>
          <nav>
            <ul className='flex aligin-center'>
              <li className='btn-round'>1</li>
              <li className='btn-round btn-round--choosen'>2</li>
              <li className='btn-round btn-round--choosen btn-round--active'>3</li>
              <li className='btn-round'>4</li>
              <li className='btn-round'>5</li>
              <li className='btn-round'>6</li>
              <li className='btn-round'>7</li>
            </ul>
          </nav>
        </div>
      </div>
      
    </div>
  )
}

export default Header;