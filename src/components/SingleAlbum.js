import React from 'react'
import {API_URL} from "../App"
import axios from 'axios';

export default class SingleAlbum extends React.Component{
  constructor(props){
      super(props);
      this.state={
        album: {}
      }
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    axios.get(`${API_URL}/albums/${id}`).then(
      (response) => {
        this.setState({
          album:response.data
        })
      }
    )
  }
  render(){

    return(
        <div>
          <h1>
            {this.state.album.name}
          </h1>
        </div>

    )
  }
}
