// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import selectedComponentReducer from './Slice';

const store = configureStore({
  reducer: {
    selectedComponent: selectedComponentReducer,
  },
});

export default store;
