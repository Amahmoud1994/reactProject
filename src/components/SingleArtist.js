import React from 'react'
import {API_URL} from "../App"
import axios from 'axios';

export default class SingleArtist extends React.Component{
  constructor(props){
      super(props);
      this.state={
        artist: {},
        followers:0,
        tracks:[],
        albums:[]
      }
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    axios.get(`${API_URL}/artists/${id}`).then(
      (response) => {
        this.setState({
          artist:response.data,followers:response.data.followers.data
        });
        console.log(response.data.images[0].url);
      }
    );
    axios.get(`${API_URL}/artists/${id}/top-tracks?country=SE`).then(
      (response) => {
        this.setState({
          tracks:response.data
        });
        // console.log(response.data.tracks[0].duration_ms);
      }
    );
    axios.get(`${API_URL}/artists/${id}/albums`).then(
      (response) => {
        this.setState({
          albums:response.data
        });
        // console.log(response.data.items[0].images[0]);
      }
    );
  }
  render(){
    return(
        <div>
          <h1>
            {this.state.artist.name}
          </h1>

          <p>
            {this.state.followers} Followers
          </p>

          <h1>
            TOP TRACKS
          </h1>

          <h1>
          Albums
          </h1>

        </div>

    )
  }
}
