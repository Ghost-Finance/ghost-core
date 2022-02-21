import { TypedUseSelectorHook, useDispatch as uD, useSelector as uS } from 'react-redux'
import type { RootState, AppDispatch } from './store'

export const useDispatch = () => uD<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = uS;
