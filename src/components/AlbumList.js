import React from 'react'
import {Link} from 'react-router-dom'

  function AlbumList(props){
    return(
      <ul className="albumList">

        <div>
        {props.albums.map((album, i) =>
          <li key={i}>
          <Link to={`/album/${album.id}`}>
          {album.name}
          </Link>
          </li>
        )}
        </div>

      </ul>
    )
  }

export default AlbumList;
