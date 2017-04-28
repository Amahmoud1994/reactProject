import React from 'react'

  function TrackList(props){
    // console.log(props.tracks);
    return(
      <ul className="trackList">

        <div>
        {props.tracks.map((track, i) =>
          <li key={i}>
          <p className="trackName">{track.name}</p>
          <p className="trackDuration">{track.duration_ms}</p>
          </li>
        )}
        </div>

      </ul>
    )
  }

export default TrackList;
