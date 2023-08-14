// import Requests from '../../API/Requests';
export default (e) => {
  // const RequestHandler = Requests();
  self.onmessage = async (msg) => {
    console.log('zarp');
    const res = await fetch('http://192.168.70.223:8080/', {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': `eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJpZCI6MSwiZXhwIjoxNjkyMDgwMzg0fQ.-zx98y_k_2X24LzzqWVfFBCvRg2GQ_TuztuhWC7D18s`,
        }
      }).then(resp => resp.json())
      .then(data =>
        postMessage(data));
  };
};