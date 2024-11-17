import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './../store/index';
import { bindActionCreators } from 'redux';
import { userActions } from '../store/userSlice';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators({ ...userActions }, dispatch);
};
