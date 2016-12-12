module.exports = () => {
  require('../../connect-io')()

  console.log('io in index:');
  console.log(global.io);
}
