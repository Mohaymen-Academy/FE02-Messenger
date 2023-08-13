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
      return res;
  }

  // PUT function
  async function PUT(url, body) {
    await axios.put(url, body, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      })
      .then((response) => {
        return response.data;
      }, (error) => {
        return error;
      });
  }

  // DELETE function
  async function DEL(url, params) {
    await axios.delete(url, {
        params: params,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      })
      .then((response) => {
        return response.data;
      }, (error) => {
        return error;
      });
  }



  return {
    GET,
    POST,
    PUT,
    DEL
  };


}