// import Requests from '../../API/Requests';
export default (e) => {
  // const RequestHandler = Requests();
  self.onmessage = (msg) => {
    // console.log(msg.data);
    // http://185.60.136.206:8080

    setInterval(async () => {
      fetch('http://192.168.70.223:8080/', {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: `${msg.data}`
        },
        method: 'GET'
      })
        .then((resp) => resp.json())
        .then((data) => postMessage(data));
    }, 1000);
  };
};
