import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  background: {
     backgroundColor: 'red',
     height: '100vh'
  }
});

const CommentView = () => {
   const classes = useStyles();
   const [question, setQuestion] = useState(false);

   return (
      <div className={classes.background}>
         <FormControl component="fieldset">
            <RadioGroup aria-label="questions-comments" name="gender1" value={question} onChange={(e) => setQuestion(e.target.value)}>
               <FormControlLabel value={true} control={<Radio />} label="Questions" />
               <FormControlLabel value={false} control={<Radio />} label="Comments" />
            </RadioGroup>
         </FormControl>
      </div>
   );
}

export default CommentView;