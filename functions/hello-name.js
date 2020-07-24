// eslint-disable-next-line require-await
exports.handler = async (event, __context) => {
  const name = event.queryStringParameters.name || 'World'

  return {
    statusCode: 200,
    body: `Hello, ${name}`,
  }
}
