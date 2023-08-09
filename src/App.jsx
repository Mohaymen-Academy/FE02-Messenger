import Layout from './Components/Layout.jsx';
import { UserChat } from './Components/ChatComps';
import React from 'react';
// import { layoutContext } from './Components/Layout.jsx';
function App() {
  return (
    <Layout>
      <UserChat />
    </Layout>
  );
}

export default App;
