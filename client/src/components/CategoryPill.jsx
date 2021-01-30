import React from 'react';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   root: {
     display: 'flex',
     justifyContent: 'center',
     flexWrap: 'wrap',
     '& > *': {
       margin: theme.spacing(0.5),
     },
   },
 }));

const CategoryPill = (props) => {
   const { category, selected } = props;
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <Chip label={`${category}`} onClick={() => props.onClick(category)} color={`${selected ? 'primary' : ''}`} />
      </div>
   );
}

export default CategoryPill;