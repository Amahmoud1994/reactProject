import React from 'react'
import {API_URL} from "../App"
import axios from 'axios';
import TrackList from "./TrackList"
import {Link} from 'react-router-dom'

export default class SingleAlbum extends React.Component{
  constructor(props){
      super(props);
      this.state={
        album: {},
        artists:[]
      }
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    axios.get(`${API_URL}/albums/${id}`).then(
      (response) => {
        this.setState({
          album:response.data,artists:response.data.artists
        })
      }
    )
  }

  render(){
    if (!this.state.artists[0]) {
      return null;
    }
    console.log(this.state.album);
    return(
        <div>

        <img src={this.state.album.images[0].url}/>

        <h1>
          {this.state.album.name}
        </h1>

        <h1>
          {this.state.artists[0].name}
        </h1>

        <h4>
          {this.state.album.tracks.total} tracks
        </h4>

        <Link to={`/artist/${this.state.artists[0].id}`}>
        <button>ARTIST PROFILE </button>
        </Link>


        <TrackList tracks={this.state.album.tracks.items} playTrack={this.props.playTrack}/>


        </div>

    )
  }
}
