import React from 'react';
import { clsx } from 'clsx';
import { ReactComponent as Hat } from './hat.svg';
import './Header.scss';
import { useActions, useAppSelector } from '../../hooks/useStoreHooks';

const Header = () => {
  const { step, auth } = useAppSelector(state => state.user);
  const count = useAppSelector(state => state.steps.count);
  const { setStep } = useActions();
  const steps: string[] = new Array(count + 2).fill('');

  return (
    <div className="header">
      <div className="container">
        <div className="flex py-7 items-center justify-between md:flex-col">
          <a href="/" className="flex text-brown align-center">
            <Hat className="w-8 fill-brown mr-1 py" />
            <h3 className="font-bold uppercase text-xl">Proftest</h3>
          </a>
          <nav className="md:pt-4">
            <div className="flex aligin-center header__steps">
              {steps.map((el, idx) => (
                <button
                  className={clsx(
                    'btn-round',
                    auth ? 'btn-round--able' : '',
                    step === idx ? 'btn-round--checked' : '',
                    step > idx ? 'btn-round--complete' : '',
                  )}
                  key={idx}
                  onClick={() => setStep(idx)}
                  aria-label={`Шаг ${idx}`}>
                  {' '}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
