import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    completedTask: [],
};

export const completedTaskSlice = createSlice({
    name: 'completedTask',
    initialState,
    reducers: {
        setCompletedTaskData: (state, action) => {
            console.log('Completed Task Data', action.payload)
            state.completedTask = action.payload || [];
        },
        addCompletedTask: (state, action) => {
            const { id, title, completedAt } = action.payload;
            state.completedTask.push({ id, title, completedAt });
        },
        deleteCompletedTask: (state, action) => {
            state.completedTask = state.completedTask.filter(task => task.id !== action.payload);
        },
    },
});

export const { addCompletedTask, deleteCompletedTask, setCompletedTaskData } = completedTaskSlice.actions;

export default completedTaskSlice.reducer;
