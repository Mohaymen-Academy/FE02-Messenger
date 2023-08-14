import Requests from '../../API/Requests';
export  default  (e) => {
  self.onmessage  = async (msg) => {
    console.log('zarp');
    // const res = await Requests().GetChatList();
    postMessage('1');
  };
};
