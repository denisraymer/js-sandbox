module.exports = function (message) {

  if (process.env.NODE_ENV === 'development') {
    console.log(`Welcome to development mode`);
  }

  alert(process.env.USER);

  console.log(`Welcome ${message}`);
}
