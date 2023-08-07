import ChatFooter from './Components/ChatFooter.jsx';
import ChatHeader from './Components/ChatHeader.jsx';
import Layout from './Components/Layout.jsx';
import ChatBody from './Components/ChatBody.jsx';
import React from 'react';

function App() {


  return (
    <Layout>
      <ChatHeader />
      <ChatBody  />
      <ChatFooter />
    </Layout>
  );
}

export default App;
