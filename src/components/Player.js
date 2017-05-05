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
    // const image = this.props.current.album.images.length > 0 ? this.props.current.album.images[0].url : "";
    console.log({content: !this.state.playing ?  "\F04B" : "\F04C"});
    var divStyle = {
      backgroundImage: `url(${this.props.current.album.images[0].url})`,
      height:"100%"
    };
    console.log(this.props.current.artists[0].name);
    console.log(this.props.current.album.images[0].url);
    // {!this.state.playing?"Play" : "Pause"}
    return(

      <div className="playerContainer">

      <div className="playerArtist">
          <div className="trackImage">
          <div className="playerImage" style={divStyle}></div>
          </div>
          <h6 className="trackPlaying">{this.props.current.name}</h6>
          <h6 className="trackPlaying">{this.props.current.artists[0].name}</h6>
          </div>

          <div className="player">
          <div className="playerControls">
          <div className="playerControlsButtons">
          <a className="playerControlsButtons">


          <i className={!this.state.playing ?  "fa fa-pause fa-2" : "fa fa-play fa-2"} onClick={this.togglePlay} >
          </i>
          </a>
          </div>

          <div className="playerBar">
            <h6 className="timeBegin">1</h6>
            <div className="progressBar"></div>
            <h6 className="timeEnd">30</h6>
          </div>
        </div>

          <ReactPlayer onProgress= {this.handleProgress} url={this.props.current.preview_url} hidden playing={this.state.playing} />

          </div>

      </div>

    )
  }
}
