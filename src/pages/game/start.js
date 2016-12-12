module.exports = () => {
  require('../../connect-io')()
  var io = global.io

  console.log('io in start:');
  console.log(global.io);
}
