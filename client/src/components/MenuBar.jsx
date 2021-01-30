import React, { useState } from 'react';
import CategoryPill from './CategoryPill';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  background: {
     backgroundColor: '#444242',
     height: '8vh',
     display: 'flex',
     flexDirection: 'row',
     justifyContent: 'left',
     alignItems: 'center',
     paddingLeft: '10px',
  }
});

const MenuBar = (props) => {
   const classes = useStyles();
   const { categories, category } = props;

   return (
      <div className={classes.background} >
         {
            categories.map((cat, i) => {
               return <CategoryPill category={cat} key={i} selected={cat === category} onClick={(e) => props.onSelectCategory(e)} />;
            })
         }
      </div>
   );
}

export default MenuBar;