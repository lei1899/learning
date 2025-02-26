exports.handler = async (event, context) => {
  const { username, password } = JSON.parse(event.body);

  console.log(username, password);
  const token = '123';  
  const user = { username: 'test' };
  return {
    statusCode: 200,
    body: JSON.stringify({ token, user }),
  };
};