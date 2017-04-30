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
    console.log(this.state.albums);
    return(
        <div className="singleArtistContainer">

          <img className="artistImage" src={this.state.imageURL}/>

          <p className="followers">
            {this.state.followers}  Followers
          </p>

          <h1 className="artistName">
            {this.state.artist.name}
          </h1>

          <button className = "button">FOLLOW </button>
          <button className = "button">PLAY ALL </button>

          <h1 className="pageTitle">
            Top Tracks
          </h1>

          <div className="tracksContainer">
          <TrackList tracks={this.state.tracks} playTrack={this.props.playTrack}/>
          </div>

          <h1 className="pageTitle">
          Albums
          </h1>

          <div className="itemsContainer">
          <AlbumList albums = {this.state.albums}/>
          </div>
        </div>

    )
  }
}
