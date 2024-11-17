import React, { useEffect } from 'react';

const useClickOutside = (ref, cb: () => void) => {
  useEffect(() => {
    const onClick = ({ target }) => {
      if (ref.current && !ref.current.contains(target)) {
        cb();
      }
    };
    setTimeout(() => document.addEventListener('click', onClick));
    return () => {
      document.removeEventListener('click', onClick);
    };
  }, [cb]);
};
export default useClickOutside;
