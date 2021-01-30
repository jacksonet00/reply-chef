import React from 'react';
import { makeStyles } from '@material-ui/core';
import ReplyButton from './ReplyButton';

const useStyles = makeStyles({
   background: {
      position: 'relative',
      backgroundColor: 'white',
      borderRadius: '5px',
      width: '85%',
      padding: '5px',
      paddingBottom: '5vh',
   },
   username: {
      paddingBottom: '5px',
      paddingLeft: '5px',
   },
   comment: {
      paddingBottom: '5px',
      paddingLeft: '5px',
   },
   replybtn: {
      position: 'absolute',
      right: '0',
      bottom: '0',
      marginRight: '5px',
      marginBottom: '5px',
   }
})

const Comment = (props) => {
   const { commentText, commentId, commenterName } = props.comment;
   const classes = useStyles();

   return (
      <div className={classes.background}>
         <div className={classes.username}>{commenterName}</div>
         <div className={classes.comment}>{commentText}</div>
         <ReplyButton InnerProps={{className: classes.replybtn}} onClick={() => console.log(commentId)} />
      </div>
   );
}

export default Comment;