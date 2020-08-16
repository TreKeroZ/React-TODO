import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({

   input: {
      margin: theme.spacing(1),
      width: 400,
   },
   button: {
      margin: theme.spacing(1),
      marginRight: theme.spacing(3),
      padding: '15px 50px',
   },
   tasks: {
      width: 450,
      borderBottom: '1px solid #e2e2e1',
      '&:hover': {
         borderBottom: '1px solid #424242',
      },
   },
   paper: {
      margin: theme.spacing(1),
   },
}));
const List = ({ tasks, onEditTask, onRemoveTask }) => {
   const classes = useStyles();
   // const editTask = () => {
   //    const newTask = window.prompt('Введите новое название задачи');
   //    if (newTask) {
   //       onEditTask(newTask , task.id);
   //    }
   // };
   return (
      <div className="AppMain__ListOfTasks">
         {
            tasks.map(task => (
               <Paper key={task.id} className={classes.paper} elevation={0}>
                  <FormControlLabel control={<Checkbox />} label="" />
                  <InputBase
                     className={classes.tasks}
                     value={task.taskText}
                     inputProps={{ 'aria-label': 'naked' }}
                     onClick={() => onEditTask(task.id, task.taskText)}
                  />
                  <IconButton aria-label="delete" className={classes.margin} onClick={() => onRemoveTask(task.id)}>
                     <DeleteIcon />
                  </IconButton>
               </Paper>)
            )
         }
      </div>

   );
};

export default List;