import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Comment from './Comment';
import List from '@material-ui/core/List';
import '../styles/Font.css'

const useStyles = makeStyles({
   background: {
      position: 'relative',
      height: '55vh',
      marginTop: '9vh',
      marginLeft: '5vw',
      marginRight: '5vw',
      borderRadius: '8px',
   },
  radio: {
      '&$checked': {
      color: '#4F87F3'
      }
   },
   checked: {
   },
   comments: {
      paddingTop: '15px',
      height: '600px',
      overflowY: 'scroll',
      width: 'fit-content'
   },
   title: {
      color: 'white'
   }
});

const CommentView = (props) => {
   const classes = useStyles();
   const { comments, category } = props;

   return (
      <div className={classes.background}>
         <div className={classes.content}>
            <h1 className={classes.title}>Comments</h1>
            <List className={classes.comments}>
               {comments.filter((com) => com.label === category).map((com, i) => {
                  return (
                     <div key={i} style={{paddingBottom: '15px'}}>
                        <Comment comment={com} onReply={(e) => props.onReply(e)} />
                     </div>
                  )
               })}
            </List>
         </div>
      </div>
   );
}

export default CommentView;