module.exports = () => {
  // console.log('existing io,' global.io);

  if (!global.io) {
    console.log('connecting to io!');
    global.io = require('socket.io-client')()
  }
}
