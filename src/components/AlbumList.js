import React from 'react'
import {Link} from 'react-router-dom'

  function AlbumList(props){
    return(
      <ul className="albumList">

        <div>
        {props.albums.map((album, i) =>
          <li key={i}>
          <Link to={`/album/${album.id}`}>
          <img  className="itemImage" src = {album.images[0].url}/>
          <p>{album.name}</p>
          </Link>
          </li>
        )}
        </div>

      </ul>
    )
  }

export default AlbumList;
