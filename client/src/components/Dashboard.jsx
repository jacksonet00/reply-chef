import React, { useState } from 'react';
import CommentView from './CommentView';
import MenuBar from './MenuBar';
import { makeStyles } from '@material-ui/core/styles'
import Footer from './Footer';
import Composer from './Composer';

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

const Dashboard = (props) => {
   const classes = useStyles();
   const { comments, labels } = props;
   const [category, setCategory] = useState(labels[0]);

   return (
      <div className={classes.background}>
         <MenuBar category={category} categories={labels} onSelectCategory={(e) => setCategory(e)}/>
         <div className={classes.grid}>
            <CommentView  category={category} comments={comments} onReply={(e) => props.onReply(e)}/>
            <Composer onComment={(e) => props.onComment(e)} />
         </div>
         <Footer />
      </div>
   );
}

export default Dashboard;