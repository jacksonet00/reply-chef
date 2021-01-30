import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles({
  background: {
     backgroundColor: '#393939',
     height: '55vh',
     marginTop: '15vh',
     marginLeft: '5vw',
     marginRight: '5vw',
     borderRadius: '8px'
  },
  title: {
     padding: '15px',
     color: 'white'
  },
  textField: {
     marginRight: '15px',
     marginLeft: '15px',
     width: ''
  }
});

const Composer = () => {
   const classes = useStyles();

   return (
      <div className={classes.background}>
         <h1 className={classes.title}>Composer</h1>
         <TextField
          className={classes.textField}
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          rows={20}
          fullWidth
          value={'hello'}
          onChange={() => console.log('titties')}
          variant="outlined"
        />
      </div>
   );
}

export default Composer;