import React from 'react';
import ReactPlayer from 'react-player'

export default class Player extends React.Component{
  constructor(props){
    super(props);
    this.state={
      playing:true
    }
    this.togglePlay=this.togglePlay.bind(this);
  }
  togglePlay(){
    this.setState({playing:!this.state.playing});
  }
  handleProgress(){
    console.log("PROGRESS");
  }
  render(){
  if (!this.props.current) {
    return null;
  }
    return(

      <div className="playerContainer">

          <h5 className="trackPlaying">{this.props.current.name}</h5>
          {this.state.playing && "Playing"}

          <button className="playerButton" onClick={this.props.prevTrack}> Previous Track</button>
          <button className="playerButton" onClick={this.togglePlay}>{!this.state.playing?"Play" : "Pause"} </button>
          <button className="playerButton" onClick={this.props.nextTrack}>Next Track </button>
          <ReactPlayer onProgress= {this.handleProgress} url={this.props.current.preview_url} hidden playing={this.state.playing} />

          <div className="progressBar">
          </div>

      </div>

    )
  }
}
