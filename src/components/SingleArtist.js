import React from 'react'
import {API_URL} from "../App"
import axios from 'axios';

export default class SingleArtist extends React.Component{
  constructor(props){
      super(props);
      this.state={
        artist: {}
      }
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    axios.get(`${API_URL}/artists/${id}`).then(
      (response) => {
        this.setState({
          artist:response.data
        })
      }
    )
  }
  render(){

    return(
        <div>
          <h1>
            {this.state.artist.name}
          </h1>
        </div>

    )
  }
}
