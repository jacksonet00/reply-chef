import React, { useState } from 'react';
import CommentView from './ComposerView';
import ComposerView from './CommentView';
import MenuBar from './MenuBar';
import { makeStyles } from '@material-ui/core/styles'
import Footer from './Footer';

const useStyles = makeStyles({
  background: {
     backgroundColor: '#2D2D2D',
     height: '100vh',
     overflow: 'hidden'
  },
  grid: {
     display: 'grid',
     gridTemplateColumns: '65fr 35fr'
  }
});

const categories = ['Beauty', 'Technology', 'News', 'Finance'];

const Dashboard = () => {
   const classes = useStyles();
   const [category, setCategory] = useState('Beauty')

   return (
      <div className={classes.background}>
         <MenuBar category={category} categories={categories} onSelectCategory={(e) => setCategory(e)}/>
         <div className={classes.grid}>
            <ComposerView />
            <CommentView />
         </div>
         <Footer />
      </div>
   );
}

export default Dashboard