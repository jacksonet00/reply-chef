import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Composer from './Composer';

const useStyles = makeStyles({
  background: {
     backgroundColor: 'green',
     height: '100vh'
  }
});

const ComposerView = ( ) => {
   const classes = useStyles();

   return (
      <div className={classes.background}>
         <Composer />
      </div>
   );
}

export default ComposerView;