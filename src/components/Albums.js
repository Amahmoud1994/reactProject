import React from 'react'
import {API_URL} from '../App'
import axios from 'axios';
import ItemList from './ItemList'
import AlbumList from './AlbumList'


export default class Albums extends React.Component{

  constructor(props){
    super(props);
    this.state={
      albums:[]
    }
    this.searchAlbums = this.searchAlbums.bind(this);

  }
  render(){
    return(

      <div>
        <div>
          <h1> Albums </h1>
        </div>

        <form className="inputForm" onSubmit={this.searchAlbums}>
					<input className="inputField" ref="keyword" type="text" placeholder="Search..."/>
				</form>
        <AlbumList albums={this.state.albums}/>
      </div>
    )
  }
  searchAlbums(event){
  event.preventDefault();
  let keyword = this.refs.keyword.value;

  axios.get(`${API_URL}/search?type=album&q=${keyword}`).then(response => {
    console.log(response.data.albums.items);
    this.setState({
      albums: response.data.albums.items
    });
  });
}

}
