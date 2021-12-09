import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import './Header.scss';
import SearchBar from './SearchBar';

export default class Header extends Component {
  render() {
    return (
      <header id='header'>
        <Link to='/' className='header-elem'>
          <h1 id='sean'>sean</h1>
        </Link>
        <SearchBar/>
      </header>
    );
  }
}
