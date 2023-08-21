import { ChatLayout } from './Components/ChatComps/';
import Layout from './Components/Layout.jsx';
import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { layoutContext } from './Components/Layout.jsx';
function App() {
  useEffect(() => {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  }, []);
  // const chatID = useSelector((state) => state.selectedProf.selectedChatID);
  return (
    <Layout>
      <ChatLayout />
    </Layout>
  );
}

export default App;
