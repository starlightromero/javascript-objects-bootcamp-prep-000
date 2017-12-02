var playlist = {};

function updatePlaylist(playlist, artistsName, songTitle) {
  playlist['artistsName'] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistsName) {
  delete playlist['artistsName'];
  return playlist
}
