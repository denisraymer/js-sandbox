module.exports = function (module) {
  return function () {
    const args = [module.filename].concat([].slice.call(arguments));

    console.log.apply(console, args);
  }
}
