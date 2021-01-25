import { combineReducers, configureStore } from '@reduxjs/toolkit';
import CountReducer from './CountReducer/Reducer';
import { useDispatch } from 'react-redux';

const RootReducer = combineReducers({
    counter: CountReducer,
});

export const store = configureStore({
    reducer: RootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
