import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';

export default (cb, loaded = false) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (loaded) return;
    dispatch(cb());
  }, [cb, dispatch])
}