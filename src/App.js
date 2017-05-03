import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './App.css';
import './foundation.css';
import ReactPlayer from 'react-player';

import Home from './components/Home';
import Artists from './components/Artists';
import Albums from './components/Albums';
import SingleArtist from './components/SingleArtist';
import SingleAlbum from './components/SingleAlbum';
import Player from './components/Player';

export const API_URL = 'https://api.spotify.com/v1';

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      queue: [],
      currentIndex:null
    }
    this.playTrack=this.playTrack.bind(this);
    this.nextTrack=this.nextTrack.bind(this);
    this.prevTrack=this.prevTrack.bind(this);
  }

  playTrack(tracks,index){
    this.setState({queue: tracks,currentIndex:index});
  }

  nextTrack(){
    this.setState({currentIndex:this.state.currentIndex+1});
  }
  prevTrack(){
    this.setState({currentIndex:this.state.currentIndex-1});
  }

  render(){
    console.log(this.state.queue);
    return(
      <BrowserRouter>
        <div>
        <Player nextTrack={this.nextTrack} prevTrack={this.prevTrack} current={this.state.queue[this.state.currentIndex]}/>
          <Menu className="menuDiv"/>

          <Route exact path="/" component = {Home} />
          <Route path="/artists" component = {Artists} />
          <Route path="/albums" component = {Albums} />
          <Route path="/artist/:id?"
          render={(routeProps)=> <SingleArtist {...routeProps} playTrack={this.playTrack} />
          } />
          <Route path="/album/:id?"
          render={(routeProps)=> <SingleAlbum {...routeProps} playTrack={this.playTrack} />
          } />

        </div>
      </BrowserRouter>

    )
  }
}


function  Menu(props){
    return(
      <nav className="sidebar">
        <div>
          <img className="logo" src="./images/spotify_logo.png" />
          <ul className="main-menu">
            <li className="menu__item active"><Link to="/"> Home </Link></li>
            <li className="menu__item"><Link to="/albums"> Albums </Link></li>
            <li className="menu__item"><Link to="/artists"> Artists </Link></li>
          </ul>
        </div>

      <div>
        <a className="sidebar__user">
          <i className="fa fa-user-o" aria-hidden="false"></i>
          Ahmed Wagdi
        </a>
    </div>
    </nav>
    )
  }
