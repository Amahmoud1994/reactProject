import React from 'react'
import {API_URL} from "../App"
import axios from 'axios';
import TrackList from "./TrackList"
import AlbumList from "./AlbumList"

export default class SingleArtist extends React.Component{
  constructor(props){
      super(props);
      this.state={
        artist: {},
        followers:0,
        tracks:[],
        albums:[],
        imageURL:null
      }
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    axios.get(`${API_URL}/artists/${id}`).then(
      (response) => {
        this.setState({
          artist:response.data,
          followers:response.data.followers.total,
          imageURL: response.data.images[0].url
        });
      }
    );
    axios.get(`${API_URL}/artists/${id}/top-tracks?country=SE`).then(
      (response) => {
        this.setState({
          tracks:response.data.tracks
        });
      }
    );
    axios.get(`${API_URL}/artists/${id}/albums`).then(
      (response) => {
        this.setState({
          albums:response.data.items
        });
      }
    );
  }
  render(){

    // console.log(this.state.imageURL);
    const image = this.state.imageURL > 0 ? this.state.imageURL : "";
    return(
        <div className="singleArtistContainer">
          <div className="artist">
            <div className="artistImage" style={{backgroundImage: `url(${this.state.imageURL})`}}>
              <div className="artistDetails">
                <p className="followers">
                  {this.state.followers}  Followers
                </p>
                <h1 className="artistName">
                  {this.state.artist.name}
                </h1>

                <button className = "button">FOLLOW </button>
                <button className = "button">PLAY ALL </button>
              </div>
            </div>
          </div>




          <div className="artistTracks">

            <h1 className="pageTitle">
              Top Tracks
            </h1>

            <div className="tracksContainer">
            <TrackList tracks={this.state.tracks} playTrack={this.props.playTrack}/>
            </div>
          </div>

          <div className="artistAlbums">

            <h1 className="pageTitle">
            Albums
            </h1>

            <div className="itemsContainer">
            <AlbumList albums = {this.state.albums}/>
            </div>
          </div>

        </div>

    )
  }
}
