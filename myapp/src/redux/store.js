import { configureStore } from '@reduxjs/toolkit';
import remainingReducer from './slice/remainingTaskSlice';
import completedReducer from './slice/completedTaskSlice';

export const store =  configureStore({
    reducer: {
        remainingTask: remainingReducer,
        completedTask: completedReducer,
    },
});
