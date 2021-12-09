import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import './Footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <div id='footer'>
        <Link to='/other-sean' className='header-elem'>
          <h1>other sean</h1>
        </Link>
      </div>
    );
  }
}