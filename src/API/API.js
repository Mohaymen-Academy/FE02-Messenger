import axios from "axios";

export default function API() {
  // GET function
  async function GET(url, params) {

      const res = await axios.get(url, {
          params: params,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        });
        console.log(res)
        return res;
  };

  // POST function
  async function POST(url, body) {
      const res = await axios.post(url, body, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      })
      console.log(res)
      return res;
  }

  // PUT function
  async function PUT(url, body) {
    const res = await axios.put(url, body, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    })
    console.log(res)
    return res;
  }

  // DELETE function
  async function DEL(url, params) {
    const res = await axios.delete(url, {
      params: params,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    });
    console.log(res)
    return res;
  }



  return {
    GET,
    POST,
    PUT,
    DEL
  };


}