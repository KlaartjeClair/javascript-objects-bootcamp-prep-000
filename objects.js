var playlist = new Object({playlist});
playlist = {
  KateBush: "Wuthering Heights",
  Abba: "Waterloo"
};

function updatePlaylist(){
  Object.assign({}, playlist, {Sting: "Fragile"})
}