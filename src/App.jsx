import ChatFooter from './Components/ChatFooter.jsx';
import ChatHeader from './Components/ChatHeader.jsx';
import Layout from './Components/Layout.jsx';

function App() {
  return (
    <Layout>
      <ChatHeader />
      <div className="flex h-[84%] w-full flex-col"></div>
      <ChatFooter />
    </Layout>
  );
}

export default App;
