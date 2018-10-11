import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }

  render () {
    return (

      <section className='library container'>
        <div className="row justify-content-center">
          {
            this.state.albums.map( (album, index) =>
              <div className="col">
                <Link to={`/album/${album.slug}`} key={index}>
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={album.albumCover}
                      alt={album.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{album.title}</h5>
                      <p className="card-text">
                        {album.artist} <br />
                        {album.songs.length} songs
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            )
          }
        </div>
      </section>
    );
  }
}

export default Library;
