import React, { ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';
import close from './close.svg';
import useClickOutside from '../../../hooks/useClickOutside';
import useLockBodyScroll from '../../../hooks/useLockBodyScroll';

type ModalProps = {
  showModal: boolean | 'error' | 'sended';
  setShowModal: () => void;
  renderContent: () => ReactNode;
  addClass?: string;
};

const Modal = ({ showModal, setShowModal, renderContent, addClass = '' }: ModalProps) => {
  const clickRef = useRef();
  useClickOutside(clickRef, setShowModal);
  useLockBodyScroll();

  return createPortal(
    <div className={`modal ${showModal ? '' : 'modal--hidden'} ${addClass}`}>
      <div className="modal__content" ref={clickRef}>
        <button
          className="absolute right-5 top-3 w-7 h-7 hover:opacity-70 transition-colors duration-1000"
          onClick={setShowModal}
          aria-label="Close">
          <img src={close} alt="" />
        </button>
        <div className="modal__wrap">{renderContent?.()}</div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
