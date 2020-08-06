import React, {Fragment} from 'react';
import { Button } from '@material-ui/core';
import {makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



const theme = createMuiTheme({
   palette: {
     primary: {
       main: '#4caf50',
     },
   },
 });

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

 const Task = () => {
  const classes = useStyles();
   return (
    <Fragment>
      <div className="AppMain__Task">
        <TextField className={classes.input} id="TextArea" label="Write your task" helperText="" variant="outlined"/>
          <ThemeProvider theme={theme}>
            <Button className={classes.button} color="primary" variant="outlined"  onClick={() => { alert('clicked') }}>ADD</Button>
          </ThemeProvider>
      </div>
    </Fragment>
   );
   
 }

 export default Task;