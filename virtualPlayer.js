// import { Playlist } from "./playList";
// import { Song } from "./song";

class VirtualPlayer {
  //playlists: [{name:'jazz, songs:[{name:'hakuna',duration:'240'}]},{},{}]
  constructor(name, playlists) {
    this.name = name;
    this.playlists = [];
    this.currentPlaylist = {};
    this.currentPlaylistIndex = 0;
    for (let i = 0; i < playlists.length; i++) {
      this.playlists.push(
        new Playlist(playlists[i].playlistName, playlists[i].songs)
      );
    }
    this.currentPlaylist = this.playlists[0];
    this.currentPlaylist.currentSong = this.playlists[0].songs[0];
  }
  makePlaylsits(playlist) {
    //{name:'jazz, songs:[{name:'hakuna',duration:'240'}
    const Playlists = this.displayPlaylistsNames();
    if (Playlists.includes(playlist.name)) {
      console.log("this playlist exists already");
    } else {
      this.playlists.push(new Playlist(playlist.name, playlist.songs));
      console.log(`playlist ${playlist.name} is created`);
    }
  }
  displayPlaylistsNames() {
    let playlistsNames = [];
    this.playlists.forEach((playlist) => {
      playlistsNames.push(playlist.playlistName);
    });
    return playlistsNames;
  }
  displayPlaylists() {
    return this.playlists;
  }
  displayCurrentPlaylist() {
    return this.currentPlaylist;
  }
  choosePlaylist(name) {
    const Playlists = this.displayPlaylistsNames();
    if (Playlists.includes(name)) {
      this.currentPlaylist = this.playlists[indexOf(name)];
      this.currentPlaylistIndex = indexOf(name);
      this.currentPlaylist.currentSong = this.currentPlaylist.songs[0];
      this.currentPlaylist.currentSongIndex = 0;
      console.log(`playlist ${name} is selected`);
    } else {
      console.log("No such playlist exists");
    }
  }

  changePlaylistNext() {
    if (this.currentPlaylistIndex === this.playlists.length - 1) {
      this.currentPlaylist = this.playlists[0];
      this.currentPlaylistIndex = 0;

      this.currentPlaylist.currentSong = this.currentPlaylist.songs[0];
      this.currentPlaylist.currentSongIndex = 0;
    } else {
      this.currentPlaylistIndex += 1;
      this.currentPlaylist = this.playlists[this.currentPlaylistIndex];

      this.currentPlaylist.currentSong = this.currentPlaylist.songs[0];
      this.currentPlaylist.currentSongIndex = 0;
    }
  }
  changePlaylistPrevious() {
    if (this.currentPlaylistIndex === 0) {
      this.currentPlaylist = this.playlists[this.playlists.length - 1];
      this.currentPlaylistIndex = this.playlists.length - 1;

      this.currentPlaylist.currentSong = this.currentPlaylist.songs[0];
      this.currentPlaylist.currentSongIndex = 0;
    } else {
      this.currentPlaylistIndex -= 1;
      this.currentPlaylist = this.playlists[this.currentPlaylistIndex];

      this.currentPlaylist.currentSong = this.currentPlaylist.songs[0];
      this.currentPlaylist.currentSongIndex = 0;
    }
  }
  deletePlaylist() {
    this.playlists.splice(this.currentPlaylistIndex, 1);
  }

  addSong(song) {
    this.currentPlaylist.songs.push(new Song(song));
  }
  removeSong() {
    this.currentPlaylist.songs.splice(this.currentPlaylistIndex, 1);
  }
  changeSongNext() {
    if (
      this.currentPlaylist.currentSongIndex ===
      this.currentPlaylist.length - 1
    ) {
      this.currentPlaylist.currentSongIndex = 0;
      this.currentPlaylist.currentSong = this.currentPlaylist.songs[0];
    } else {
      this.currentPlaylist.currentSongIndex += 1;
      this.currentPlaylist.currentSong =
        this.currentPlaylist.songs[this.currentSongIndex];
    }
  }
  changeSongPrevious() {
    if (this.currentSongIndex === 0) {
      this.currentPlaylist.currentSong =
        this.currentPlaylist.songs[this.currentPlaylist.length - 1];
      this.currentPlaylist.currentSongIndex = this.currentPlaylist.length - 1;
    } else {
      this.currentPlaylist.currentSongIndex -= 1;
      this.currentPlaylist.currentSong =
        this.currentPlaylist.songs[this.currentSongIndex];
    }
  }
  playSong() {
    this.currentPlaylist.playSong();
  }
  pauseSong() {
    this.currentPlaylist.pauseSong();
  }
}

class Playlist {
  constructor(playlistName, songs) {
    this.playlistName = playlistName;
    this.currentSong = {};
    this.currentSongIndex = 0;
    this.songs = [];
    for (let i = 0; i < songs.length; i++) {
      this.songs.push(new Song(songs[i].songName, songs[i].duration));
    }
  }
  playSong() {
    this.currentSong.play = true;
    console.log(`${this.currentSong} is playing`);
  }
  pauseSong() {
    this.currentSong.play = false;
    console.log(`${this.currentSong} is paused`);
  }
}

class Song {
  constructor(song) {
    this.songName = song.songName;
    this.duration = song.duration;
    this.play = true;
  }
}

// (main)
//////////////////////////////////////////////////////////////////////////////////////////////

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
