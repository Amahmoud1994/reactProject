import React from 'react'
import {Link} from 'react-router-dom'

  function ArtistList(props){

        // console.log(props.artists[0].images[0].url);

    return(
      <ul className="artistList">

        <div>
        {props.artists.map((artist, i) =>
          {
            const image = artist.images.length > 0 ? artist.images[0].url : "";

            return(
            <li key={i}>
            <Link to={`/artist/${artist.id}`}>
            <img  className="itemImage" src={image} />
            <p>{artist.name}</p>
            </Link>
            </li>
          )
          }
        )
      }
        </div>

      </ul>
    )
  }

export default ArtistList;
