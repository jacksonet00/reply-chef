import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard.jsx';
import './styles/App.css'
import './styles/Font.css'
import jsonData from './data/data.json'

function App() {
  const [data, _] = useState(jsonData);
  const [replyingTo, setReplyingTo] = useState('');

  const handleReply = (e) => {
    document.getElementById('composer-text-field').focus();
    setReplyingTo(e);
  }

  const handleComment = (e) => {
    console.log(`Replied: ${e} to ${replyingTo}`);
  }

  return (
    <div>
      <Dashboard labels={data.labels[0]} comments={data.data[0]} onReply={(e) => handleReply(e)} onComment={(e) => handleComment(e)}/>
    </div>
  );
}

export default App;
