import React from 'react';
import CategoryPill from './CategoryPill';
import { makeStyles } from '@material-ui/core/styles'
import Logo from '../images/reply_chef_icon.svg'
import List from '@material-ui/core/List'

const useStyles = makeStyles({
  background: {
     backgroundColor: '#444242',
     height: '8vh',
     paddingLeft: '1vw',
     alignItems: 'center',
     display: 'flex',
     flexDirection: 'row'
  },
  flexBox: {
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'left',
   overflowX: 'auto'
  },
  logo: {
     height: '60px',
     width: '60px'
  }
});

const MenuBar = (props) => {
   const classes = useStyles();
   const { categories, category } = props;

   return (
      <div className={classes.background} >
         <img className={classes.logo} src={Logo} alt="logo" />
         <List className={classes.flexBox} >
            {
               categories.map((cat, i) => {
                  return <CategoryPill category={cat} key={i} selected={cat === category} onClick={(e) => props.onSelectCategory(e)} />;
               })
            }
         </List>
      </div>
   );
}

export default MenuBar;