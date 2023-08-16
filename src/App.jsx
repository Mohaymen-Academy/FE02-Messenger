import { ChatLayout } from './Components/ChatComps/';
import Layout from './Components/Layout.jsx';
import React, { useEffect } from 'react';
// import { layoutContext } from './Components/Layout.jsx';
function App() {
  useEffect(() => {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      
    });
  }, []);
  return (
    <Layout>
      <ChatLayout />
    </Layout>
  );
}

export default App;
