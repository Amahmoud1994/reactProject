import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './App.css';

import Home from './components/Home';
import Artists from './components/Artists';
import SingleArtist from './components/SingleArtist';

export const API_URL = 'https://api.spotify.com/v1';

export default class App extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <BrowserRouter>
        <div>
          <Menu />
          <Route exact path="/" component = {Home} />
          <Route path="/artists" component = {Artists} />
          <Route path="/artist/:id" component = {SingleArtist} />
        </div>
      </BrowserRouter>

    )
  }
}

function  Menu(props){
    return(
        <ul>
          <li> <Link to="/"> Home </Link></li>
          <li> <Link to="/artists"> Artists </Link></li>
        </ul>
    )
  }
