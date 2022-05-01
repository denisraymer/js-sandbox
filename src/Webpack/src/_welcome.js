export default function (message) {

  if (process.env.NODE_ENV === 'development') {
    console.log(`Welcome to development mode`);
  }

  console.log(`Welcome ${message}`);
}
