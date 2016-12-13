user joins new room
  function checks to see if that room already has a guest
  if it doesn't, client socket emits join as guest
  io checks again to make sure there isn't a guest

  if there isn't,
    io assigns that user as the guest
    io emits game start

  socket on game-id page is listening for game start
  on game start, console log game starting
