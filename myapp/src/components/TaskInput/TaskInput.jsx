import { Box, Grid, Paper, TextField, Typography } from '@mui/material'
import './TaskInput.scss'
function TaskInput({handleSubmit, taskData, handleOnchange, taskError}) {
    return (
        <>
            <Grid item xs={12}>
                <Paper elevation={3}>
                    <form onSubmit={handleSubmit} className="formContainer">
                        <Box>
                            <Typography variant='h5' className="heading">
                                React Todo List
                            </Typography>
                            <Grid container className='gridOne'>
                                <Grid item xs={8}>
                                    <TextField
                                        id='inputTaskField'
                                        label='Press Enter To Add A Task'
                                        variant='outlined'
                                        fullWidth={true}
                                        size='small'
                                        value={taskData}
                                        onChange={handleOnchange}
                                        error={taskError ? true : false}
                                        helperText={taskError}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </form>
                </Paper>
            </Grid>
        </>
    )
}

export default TaskInput
