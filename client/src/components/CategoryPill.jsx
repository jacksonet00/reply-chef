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
         <Chip label={`${category}`} onClick={() => props.onClick(category)} color={`${selected ? 'primary' : ''}`} variant="default" size="medium" style={{
            fontFamily: 'Poppins',
            fontSize: '16px',
            paddingLeft: '5px',
            paddingRight: '5px',
            height: '35px',
            backgroundColor: '#616161',
            boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
         }}/>
      </div>
   );
}

export default CategoryPill;