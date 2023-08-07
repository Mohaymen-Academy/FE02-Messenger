import ChatFooter from './Components/ChatFooter.jsx';
import ChatHeader from './Components/ChatHeader.jsx';
import Layout from './Components/Layout.jsx';

function App() {
  return (
    <Layout>
      <ChatHeader />
      <div className="flex w-full h-[88%]">
      </div>
      <ChatFooter/>
    </Layout>
  );
}

export default App;
