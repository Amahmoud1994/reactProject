import React from 'react'

  function TrackList(props){
    // console.log(props.playTrack);
    return(
      <ul className="trackList">

        <div>
        {props.tracks.map((track, i) =>
          <li key={i} onClick={()=> props.playTrack(props.tracks,i)}>
          <p className="trackName">{track.name}</p>
          <p className="trackDuration">{track.duration_ms}</p>
          </li>
        )}
        </div>

      </ul>
    )
  }

export default TrackList;
