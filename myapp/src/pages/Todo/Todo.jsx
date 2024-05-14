import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRemainingTask, deleteRemainingTask, setRemainingTaskData } from "../../redux/slice/remainingTaskSlice";
import { addCompletedTask, deleteCompletedTask, setCompletedTaskData } from "../../redux/slice/completedTaskSlice";
import './Todo.scss';
import { Box, Grid } from "@mui/material";
import TaskInput from "../../components/TaskInput/TaskInput";
import TaskList from "../../components/TaskList/TaskList";
function Todo() {
    const [taskData, setTaskData] = useState('');
    const [taskError, setTaskError] = useState('');

    const dispatch = useDispatch();
    const remainingTask = useSelector(state => state.remainingTask.remainingTask);
    const completedTask = useSelector(state => state.completedTask.completedTask);

    // Load state from local storage
    useEffect(() => {
        const savedRemainingTask = JSON.parse(localStorage.getItem('remainingTask'));
        const savedCompletedTask = JSON.parse(localStorage.getItem('completedTask'));

        console.log('Remaining task', savedRemainingTask);
        console.log('Completed Task', savedCompletedTask);

        dispatch(setRemainingTaskData(savedRemainingTask || []));
        dispatch(setCompletedTaskData(savedCompletedTask || []));

    }, [dispatch]);


    // Save tasks to local storage whenever they change
    useEffect(() => {
        localStorage.setItem('remainingTask', JSON.stringify(remainingTask));
    }, [remainingTask]);

    useEffect(() => {
        localStorage.setItem('completedTask', JSON.stringify(completedTask));
    }, [completedTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskData !== '' && taskData.length > 3) {
            dispatch(addRemainingTask({ id: Math.random(), title: taskData, createdAt: new Date().toISOString() }));
            setTaskData('');
        } else {
            setTaskError('Task should be greater than 3 characters');
        }
    };

    const handleOnchange = (e) => {
        if (e.target.value.length <= 3 && e.target.value.length > 0) {
            setTaskError('Task should be more than 3 characters');
        } else {
            setTaskError('');
        }
        setTaskData(e.target.value);
    }

    const handleTaskCompleted = (id) => {
        const task = remainingTask.find(task => task.id === id);
        dispatch(addCompletedTask({ ...task, completedAt: new Date().toISOString() }));
        dispatch(deleteRemainingTask(id));
    };

    const handleTaskDeleted = (id) => {
        dispatch(deleteRemainingTask(id));
    };

    const handleCompletedTaskDeleted = (id) => {
        dispatch(deleteCompletedTask(id));
    };

    return (
        <>
            <Box className="container">
                <Grid container>
                    <TaskInput
                        handleSubmit={handleSubmit}
                        taskData={taskData}
                        handleOnchange={handleOnchange}
                        taskError={taskError}
                    />
                    <TaskList
                        remainingTask={remainingTask}
                        completedTask={completedTask}
                        handleTaskCompleted={handleTaskCompleted}
                        handleTaskDeleted={handleTaskDeleted}
                        handleCompletedTaskDeleted={handleCompletedTaskDeleted}
                    />
                </Grid>
            </Box>
        </>
    )
}

export default Todo
