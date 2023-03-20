import { configureStore } from '@reduxjs/toolkit';
import annotationsReducer from './annotationsSlice';

const store = configureStore({
  reducer: {
    annotations: annotationsReducer,
    // Add other reducers here if necessary
  },
});