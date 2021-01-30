import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import ReplyButton from './ReplyButton';

const useStyles = makeStyles({
  background: {
     position: 'relative',
     backgroundColor: '#393939',
     height: '55vh',
     marginTop: '15vh',
     marginLeft: '5vw',
     marginRight: '5vw',
     borderRadius: '8px',
  },
  title: {
     paddingLeft: '5%',
     paddingTop: '5%',
     paddingBottom: '5%',
     color: 'white'
  },
  inputText: {
     color: 'white'
  },
  textField: {
     width: '90%',
     marginLeft: '5%'
  },
  sendButton: {
     position: 'absolute',
     bottom: '0',
     right: '0',
  }
});

const Composer = () => {
   const classes = useStyles();
   const [comment, setComment] = useState('');

   const sendComment = () => {
      // TODO
      console.log(comment);
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      sendComment(comment);
      setComment('');
   }

   return (
      <div className={classes.background}>
         <form onSubmit={handleSubmit}>
            <h1 className={classes.title}>Composer</h1>
            <TextField
            className={classes.textField}
            id="outlined-multiline-flexible"
            multiline
            rows={19}
            fullWidth
            placeholder={'>_'}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            variant="filled"
            InputProps={{className: classes.inputText}}
         />
         <ReplyButton className={classes.sendButton}/>
        </form>
      </div>
   );
}

export default Composer;