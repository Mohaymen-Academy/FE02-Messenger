// import Requests from '../../API/Requests';
export default (e) => {
  // const RequestHandler = Requests();
  self.onmessage = (msg) => {
    // console.log(msg.data);
    // http://185.60.136.206:8080
    // console.log(msg.data);
    if (!msg.data.kill) {
    } else {
      self.close();
      postMessage('zarp');
    }
  };
};
