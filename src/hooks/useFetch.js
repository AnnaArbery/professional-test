import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';

export default (cb) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cb());
  }, [cb, dispatch])
}