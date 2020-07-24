const axios = require('axios').default

const API_ENDPOINT = 'https://icanhazip.com/'

exports.handler = async (_event, _context) => {
  const res = await axios(API_ENDPOINT)
    .then((response) => response.text())
    .then((data) => ({
      statusCode: 200,
      body: `AWS IP is ${data}`,
    }))
    .catch((error) => ({ statusCode: 422, body: String(error) }))
  return res
}
