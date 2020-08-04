import React from 'react';
import { Button } from '@material-ui/core';
import {makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


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


function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO</h1>
      </header>
      <div className="App_main">
      
        <TextField className={classes.input} id="TextArea" label="Write your task" helperText="" variant="outlined"/>
        <ThemeProvider theme={theme}>
          <Button className={classes.button} color="primary" variant="outlined"  onClick={() => { alert('clicked') }}>ADD</Button>
        </ThemeProvider>
        {/* Вывод задач */}
        <Paper className={classes.paper} elevation={0}>
          <FormControlLabel control={<Checkbox />} label=""/>
          <InputBase
            className={classes.tasks}
            defaultValue="Naked input"
            inputProps={{ 'aria-label': 'naked' }}
            onClick={() => { alert('modify') }}
          />
          <IconButton aria-label="delete" className={classes.margin}>
            <DeleteIcon />
          </IconButton>
        </Paper>
        <Paper className={classes.paper} elevation={0}>
          <FormControlLabel control={<Checkbox />} label=""/>
          <InputBase
            className={classes.tasks}
            defaultValue="Naked input"
            inputProps={{ 'aria-label': 'naked' }}
            onClick={() => { alert('modify') }}
          />
          <IconButton aria-label="delete" className={classes.margin}>
            <DeleteIcon />
          </IconButton>
        </Paper>
        <Paper className={classes.paper} elevation={0} >
          <FormControlLabel control={<Checkbox />} label=""/>
          <InputBase
            className={classes.tasks}
            defaultValue="Naked input"
            inputProps={{ 'aria-label': 'naked' }}
            onClick={() => { alert('modify') }}
          />
          <IconButton aria-label="delete" className={classes.margin} onClick={() => { alert('modify') }}>
            <DeleteIcon />
          </IconButton>
        </Paper>
      </div>
    </div>
  );
}

export default App;
