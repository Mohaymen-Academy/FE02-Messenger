// import Requests from '../../API/Requests';
export default (e) => {
  self.onmessage = (msg) => {
    // if (msg.data.chatID!=0) self.close();
    if (!msg.data.shoulddead) {
      interval = setInterval(async () => {
        fetch(
          `http://192.168.70.223:8080?` +
            new URLSearchParams({
              active_chat: msg.data.chatID || 0
            }),
          {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              Authorization: `${msg.data.token}`
            },
            method: 'GET'
          }
        )
          .then((resp) => resp.json())
          .then((data) => postMessage(data));
      }, 1000);
    } else {
    }
  };
};
