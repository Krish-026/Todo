import { Avatar, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Paper, Typography } from '@mui/material'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { format } from 'date-fns';
import './TaskList.scss'

function TaskList({ remainingTask, completedTask, handleTaskCompleted, handleTaskDeleted, handleCompletedTaskDeleted }) {
    console.log("Remaining Task in TaskList", remainingTask);
    console.log("Completed Task in TaskList", completedTask);
    return (
        <>
            <Grid item xs={12} className='taskGrid'>
                <Grid container spacing={2}>

                    {/* remainingTask */}
                    <Grid item xs={12} sm={6} lg={6}>
                        <Paper elevation={3}>
                            <List className='listContainer' dense={true}>
                                <Typography className='listTypography' variant='h5'>Remaining Task</Typography>
                                {/* remainingTask */}
                                {remainingTask && remainingTask.length > 0
                                    ? remainingTask.slice(0).reverse().map((task, key) => (
                                        <ListItem key={key}>
                                            <ListItemAvatar>
                                                <Avatar className='avatarList'>{task.title[0].toUpperCase()}</Avatar>
                                            </ListItemAvatar>

                                            <ListItemText
                                                primary={task.title}
                                                secondary={format(task.createdAt, "MMM dd, yyyy hh:mm a")}
                                            />
                                            <ListItemSecondaryAction>

                                                <IconButton className='doneOutlineIcon' onClick={() => handleTaskCompleted(task.id)}>
                                                    <DoneOutlineIcon />
                                                </IconButton>
                                                <IconButton className='deleteForeverIcon' onClick={() => handleTaskDeleted(task.id)}>
                                                    <DeleteForeverIcon />
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    ))
                                    : <Typography className='noTask' variant='h6'>No Task Available</Typography>
                                }
                            </List>
                        </Paper>
                    </Grid>

                    {/* completedTask */}
                    <Grid item xs={12} sm={6} lg={6}>
                        <Paper elevation={3}>
                            <List className='listContainer' dense={true}>
                                <Typography className='listTypographyCompleted' variant='h5'>Completed Task</Typography>
                                {/* completedTask */}
                                {completedTask && completedTask.length > 0
                                    ? completedTask.map((task, key) => (
                                        <ListItem key={key}>
                                            <ListItemAvatar>
                                                <Avatar className='avatarListCompleted'>{task.title[0].toUpperCase()}</Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={task.title}
                                                secondary={format(task.completedAt, "MMM dd, yyyy hh:mm a")}
                                            />
                                            <ListItemSecondaryAction>
                                                <IconButton className='deleteForeverIcon' onClick={() => handleCompletedTaskDeleted(task.id)}>
                                                    <DeleteForeverIcon />
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    ))
                                    : <Typography className='noTask' variant='h6'>No Task Available</Typography>
                                }
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default TaskList
