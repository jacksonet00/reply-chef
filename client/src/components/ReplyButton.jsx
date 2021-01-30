import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
   btnContainer: {
      position: 'absolute',
      right: '0',
      bottom: '0',
      marginRight: '5%',
      marginBottom: '5%'
   }
});

const ReplyButton = ({ InnerProps }) => {
   const classes = useStyles();

   return (
      <div >
         <Button {...InnerProps} variant="contained" color="primary" type="submit" style={{ fontFamily: 'Poppins' }} >Reply</Button>
      </div>
   );
}

export default ReplyButton;