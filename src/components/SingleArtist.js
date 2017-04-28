import React from 'react'
import {API_URL} from "../App"
import axios from 'axios';
import TrackList from "./TrackList"
import ItemList from "./ItemList"

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
    return(
        <div>

          <img src={this.state.imageURL}/>

          <p className="followers">
            {this.state.followers}  Followers
          </p>

          <h1>
            {this.state.artist.name}
          </h1>

          <button>FOLLOW </button>
          <button>PLAY ALL </button>

          <h1>
            TOP TRACKS
          </h1>
          <TrackList tracks={this.state.tracks}/>

          <h1>
          Albums
          </h1>
          <ItemList items = {this.state.albums}/>
        </div>

    )
  }
}
