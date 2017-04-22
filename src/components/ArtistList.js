import React from 'react'
import {Link} from 'react-router-dom'

  function ArtistList(props){
    return(
      <ul className="artistList">

        <div>
        {props.artists.map((artist, i) =>
          <li key={i}>
          <Link to={`/artist/${artist.id}`}>
          {artist.name}
          </Link>
          </li>
        )}
        </div>

      </ul>
    )
  }

export default ArtistList;
