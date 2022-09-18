import VirtualPlayer from "./virtualPlayer";

let VirtualPlayer1 = new VirtualPlayer("VP1", [
  {
    playlistName: "jazz",
    songs: [
      { songName: "hakuna", duration: "240" },
      { songName: "matata", duration: "210" },
      { songName: "hola", duration: "165" },
    ],
  },
]);

console.log("Total Playlists in this Virtual Player are as follows: ");
console.log(VirtualPlayer1.displayPlaylistsNames());
console.log("----------------------------");
VirtualPlayer1.makePlaylsits({
  name: "rock",
  songs: [{ songName: "rockstar", duration: "260" }],
});

console.log(VirtualPlayer1.displayPlaylists());
VirtualPlayer1.changePlaylistNext();
console.log(VirtualPlayer1.displayCurrentPlaylist());
VirtualPlayer1.displayCurrentPlaylist();
console.log("########################");
VirtualPlayer1.changePlaylistNext();
console.log(VirtualPlayer1.displayCurrentPlaylist());
VirtualPlayer1.displayCurrentPlaylist();
