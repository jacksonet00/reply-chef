import React from 'react';
import { makeStyles } from '@material-ui/core';
import ReplyButton from './ReplyButton';

const useStyles = makeStyles({
   background: {
      position: 'relative',
      backgroundColor: '#C4C4C4',
      borderRadius: '5px',
      width: '600px',
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
   const { comment, label } = props.comment;
   const classes = useStyles();

   return (
      <div className={classes.background}>
         <div className={classes.comment}>{comment}</div>
         <ReplyButton title="Compose Reply" InnerProps={{className: classes.replybtn}} onClick={() => props.onReply(comment)} />
      </div>
   );
}

export default Comment;