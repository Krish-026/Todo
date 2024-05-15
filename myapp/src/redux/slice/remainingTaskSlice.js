import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    remainingTask: [],
};

export const remainingTaskSlice = createSlice({
    name: 'remainingTask',
    initialState,
    reducers: {
        setRemainingTaskData: (state, action) => {
            state.remainingTask = action.payload || [];
        },
        addRemainingTask: (state, action) => {
            const { id, title, createdAt } = action.payload;
            state.remainingTask.push({ id, title, createdAt });
        },
        deleteRemainingTask: (state, action) => {
            state.remainingTask = state.remainingTask.filter(task => task.id !== action.payload);
        },
    },
});

export const { addRemainingTask, deleteRemainingTask, setRemainingTaskData } = remainingTaskSlice.actions;

export default remainingTaskSlice.reducer;
