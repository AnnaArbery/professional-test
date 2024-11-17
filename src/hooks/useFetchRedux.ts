import React, { useEffect } from 'react';
import { useAppDispatch } from './useStoreHooks';

export default (cb, loaded: boolean = false) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (loaded) return;
    dispatch(cb());
  }, [cb, dispatch]);
};
