import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/Font.css'

const useStyles = makeStyles({
  background: {
     height: '100vh'
  },
  radio: {
     fontFamily: 'Poppins',
     fontSize: '24px',
  }
});

const CommentView = () => {
   const classes = useStyles();
   const [question, setQuestion] = useState('comment');

   return (
      <div className={classes.background}>
         <FormControl className={classes.radio} component="fieldset">
            <RadioGroup aria-label="questions-comments" name="gender1" value={question} onChange={(e) => setQuestion(e.target.value)}>
               <FormControlLabel className={classes.radio} value="question" control={<Radio color={`${question === 'question' ? 'primary' : 'white'}`} />} label="Questions" style={{
                  fontFamily: 'Poppins',
                  fontSize: '24px',
                  color: `${question === 'question' ? 'white' : ''}`,
               }} />
               <FormControlLabel className={classes.radio} value="comment" control={<Radio color={`${question === 'comment' ? 'primary' : 'white'}`} />} label="Comments" style={{
                  fontFamily: 'Poppins',
                  fontSize: '24px',
                  color: `${question === 'comment' ? 'white' : ''}`,
               }} />
            </RadioGroup>
         </FormControl>
      </div>
   );
}

export default CommentView;