import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';

class Album extends Component {
  constructor (props) {
    super(props);

    // find the album object from the slug provided in the URL slug parameter
    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album,
      currentSong: album.songs[0],
      isPlaying: false,
      isHovered: null
    };

    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
  }

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }

  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false });
  }

  setSong(song) {
    this.audioElement.src = song.audioSrc;
    this.setState({ currentSong: song });
  }

  handleSongClick(song) {
    const isSameSong = this.state.currentSong === song;
    if (this.state.isPlaying && isSameSong) {
      this.pause();
    } else {
      if (!isSameSong) {this.setSong(song);}
      this.play();
    }
  }

  handleOnMouseEnter(song) {
    this.setState({ isHovered: song });
  }

  handleOnMouseLeave(song) {
    this.setState({ isHovered: null });
  }

  handlePrevClick() {
    //find the index of the current song
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    // calculate song index - 1 never going below 0
    const newIndex = Math.max(0, currentIndex - 1);
    // set the new song via the index
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    // play the song
    this.play();
  }

  displayButton(song, index){
    if (this.state.isHovered === song && this.state.currentSong !== song) {
      return <span className="ion-md-play"></span>
    } else if (this.state.isPlaying && this.state.currentSong === song) {
      return <span className="ion-md-pause"></span>
    } else if (!this.state.isPlaying && this.state.currentSong === song) {
      return <span className="ion-md-play"></span>
    } else {
      return <span>{index + 1}</span>
    }
  }

  render () {
    return (
      <section className="album">
        <section id="album-info">
          <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
          <div className="album-details">
            <h1 id="album-title">{this.state.album.title}</h1>
            <h2 className="artist">{this.state.album.artist}</h2>
            <div id="release-info">{this.state.album.releaseInfo}</div>
          </div>
        </section>
        <table id="song-list">
          <colgroup>
            <col id="song-number-column"/>
            <col id="song-title-column"/>
            <col id="song-duration-column"/>
          </colgroup>
          <tbody>
            {
              this.state.album.songs.map( (song, index) =>
                <tr className="song" key={index} onClick={() => this.handleSongClick(song)} onMouseEnter={() => this.handleOnMouseEnter(song)} onMouseLeave={() => this.handleOnMouseLeave(song)}>
                  <td>{this.displayButton(song, index)}</td>
                  <td>{song.title}</td>
                  <td>{song.duration}</td>
                </tr>
              )
            }
          </tbody>
        </table>
        <PlayerBar
          isPlaying={this.state.isPlaying}
          currentSong={this.state.currentSong}
          handleSongClick={() => this.handleSongClick(this.state.currentSong)}
          handlePrevClick={() => this.handlePrevClick()}
        />
      </section>
    );
  }
}


export default Album;
