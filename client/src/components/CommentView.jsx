import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Comment from './Comment';
import GridList from '@material-ui/core/GridList';
import '../styles/Font.css'

const useStyles = makeStyles({
   background: {
      position: 'relative',
      height: '55vh',
      marginTop: '12vh',
      marginLeft: '5vw',
      marginRight: '5vw',
      borderRadius: '8px',
      marginBottom: '5vh',
   },
  label: {
     fontFamily: 'Poppins',
     fontSize: '24px',
     color: 'white'
  },
  radio: {
      '&$checked': {
      color: 'white'
      }
   },
   checked: {
   },
   comments: {
      paddingTop: '5vh',
      height: '60vh'
   }
});

const comments = [
   {
      commentId: 123,
      commentText: 'I love your video :)',
      commenterName: 'donkeykong42069'
   },
   {
      commentId: 456,
      commentText: 'What is your address???',
      commenterName: 'basketballrangeroverkid'
   },
   {
      commentId: 789,
      commentText: 'Why tf my pp hard??',
      commenterName: 'littlekidlover'
   }
]

const CommentView = () => {
   const classes = useStyles();
   const [question, setQuestion] = useState('comment');

   return (
      <div className={classes.background}>
         <div className={classes.content}>
            <FormControl className={classes.radio} component="fieldset">
               <RadioGroup aria-label="questions-comments" name="gender1" value={question} onChange={(e) => setQuestion(e.target.value)}>
                  <FormControlLabel className={classes.radio} value="question" control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label={<h1 className={classes.label}>{'Questions'}</h1>} />
                  <FormControlLabel className={classes.radio} value="comment" control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label={<h1 className={classes.label}>{'Comments'}</h1>} />
               </RadioGroup>
            </FormControl>
            <GridList className={classes.comments}>
               {comments.map((com, i) => {
                  return <div><Comment comment={com} /></div>
               })}
            </GridList>
         </div>
      </div>
   );
}

export default CommentView;