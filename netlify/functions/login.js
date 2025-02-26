exports.handler = async (event, context) => {
  const { username, password } = JSON.parse(event.body);

  console.log(username, password);
  
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Login successful' }),
  };
};