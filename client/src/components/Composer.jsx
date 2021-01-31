import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import ReplyButton from './ReplyButton';

const useStyles = makeStyles({
   container: {
      height: '100vh',
   },
  background: {
     position: 'relative',
     backgroundColor: '#393939',
     height: '515px',
     width: '450px',
     marginTop: '15vh',
     marginLeft: '5vw',
     marginRight: '5vw',
     borderRadius: '8px',
  },
  title: {
     paddingLeft: '15px',
     paddingTop: '15px',
     paddingBottom: '15px',
     color: 'white'
  },
  inputText: {
     color: 'white'
  },
  textField: {
     width: '420px',
     marginLeft: '15px'
  },
  replybtn: {
   position: 'absolute',
   right: '0',
   bottom: '0',
   marginRight: '15px',
   marginBottom: '15px',
}
});

const Composer = (props) => {
   const classes = useStyles();
   const [comment, setComment] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      props.onComment(comment);
      setComment('');
   }

   return (
      <div className={classes.container}>
         <div className={classes.background}>
            <form onSubmit={handleSubmit}>
               <h1 className={classes.title}>Composer</h1>
               <TextField
               className={classes.textField}
               id="composer-text-field"
               multiline
               rows={17}
               fullWidth
               placeholder={'>_'}
               value={comment}
               onChange={(e) => setComment(e.target.value)}
               variant="filled"
               InputProps={{className: classes.inputText}}
            />
            <ReplyButton title="Send" InnerProps={{ className: classes.replybtn }}/>
         </form>
         </div>
      </div>
   );
}

export default Composer;