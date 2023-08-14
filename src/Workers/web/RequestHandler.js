export default (e) => {
  self.onmessage = (msg) => {
    console.log('zarp');
    postMessage('1');
  };
};
