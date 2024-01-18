import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { clsx } from 'clsx';
import { setStep } from '../../store/userSlice'
import {ReactComponent as Hat} from './hat.svg'
import './Header.scss'

const Header = () => {
  const dispatch = useDispatch();
  const {step, auth } = useSelector(state => state.user);
  const count = useSelector(state => state.steps.count);
  const steps = new Array(count + 2).fill('');

  return (
    <div className='header'>
      <div className='container'>
        <div className='flex py-7 items-center justify-between md:flex-col'>
          <a href='/' className='flex text-brown align-center'>
            <Hat className='w-8 fill-brown mr-1 py'/>
            <h3 className='font-bold uppercase text-xl'>Proftest</h3>
          </a>
          <nav className='md:pt-4'>
            <div className='flex aligin-center header__steps'>
              {steps.map((el, idx) =>
                <button
                  className={clsx('btn-round',
                    auth ? 'btn-round--able': '',
                    step === idx ? 'btn-round--checked': '',
                    step > idx ? 'btn-round--complete': ''
                  )}
                  key={idx}
                  onClick={() => dispatch(setStep(idx))}
                  aria-label={idx}
                > </button>
              )}
            </div>
          </nav>
        </div>
      </div>
      
    </div>
  )
}

export default Header;