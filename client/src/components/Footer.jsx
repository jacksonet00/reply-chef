import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import GitHubIcon from '@material-ui/icons/GitHub';
import '../styles/Font.css';

const useStyles = makeStyles({
   background: {
      color: 'white',
      position: 'absolute',
      bottom: '0',
      width: '100vw',
      marginBottom: '5vh',
   },
   signature: {
      position: 'absolute',
      bottom: '0',
      right: '0',
      marginRight: '5vw',
      fontFamily: 'Poppins',
      cursor: 'pointer'
   },
   github: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      marginLeft: '5vw',
      cursor: 'pointer'
   }
});

const Footer = (props) => {
   const classes = useStyles();

   return (
      <div className={classes.background} >
         <GitHubIcon className={classes.github} onClick={() => window.open('https://github.com/jacksonet00/comment-ai')} />
         <p className={classes.signature} onClick={() => window.open('https://devpost.com/PROJECT')}>Made with <span role="img" aria-label="sheep">❤️</span> at SwampHacks</p>
      </div>
   );
}

export default Footer;