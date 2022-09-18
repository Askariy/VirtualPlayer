import { Song } from "./song";
export class Playlist {
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
