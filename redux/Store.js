import { configureStore } from '@reduxjs/toolkit';
import dataSlice from '../slice/Slice'

export const store = configureStore({
  reducer: {
    data:dataSlice
  },
});

