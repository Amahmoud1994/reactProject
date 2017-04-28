import React from 'react'
import {API_URL} from '../App'
import axios from 'axios';
import ItemList from './ItemList'


export default class Artists extends React.Component{

  constructor(props){
    super(props);
    this.state={
      artists:[]
    }
    this.searchArtists = this.searchArtists.bind(this);

  }
  render(){
    return(

      <div>
        <div>
          <h1> Artists </h1>
        </div>

        <form className="inputForm" onSubmit={this.searchArtists}>
					<input className="inputField" ref="keyword" type="text" placeholder="Search..."/>
				</form>
        <ItemList items={this.state.artists}/>
      </div>
    )
  }
  searchArtists(event){
  event.preventDefault();
  let keyword = this.refs.keyword.value;

  axios.get(`${API_URL}/search?type=artist&q=${keyword}`).then(response => {
    this.setState({
      artists: response.data.artists.items
    });
  });
}

}
