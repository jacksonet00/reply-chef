import React, { useState } from 'react';
import CommentView from './ComposerView';
import ComposerView from './CommentView';
import MenuBar from './MenuBar';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  background: {
     backgroundColor: '#2D2D2D',
     height: '100vh'
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
   const [questionsFilter, setQuestionsFilter] = useState(false)

   return (
      <div className={classes.background}>
         <MenuBar category={category} categories={categories} onSelectCategory={(e) => setCategory(e)}/>
         <div className={classes.grid}>
            <ComposerView />
            <CommentView />
         </div>
      </div>
   );
}

export default Dashboard