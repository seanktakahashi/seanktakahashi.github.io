import React, { Component } from 'react';
import './SearchBar.scss';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    }
  }

  handleSearch = e => {
    e.preventDefault();
    console.log('user searched for: ', this.state.searchText);
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value });
  }

  render() {
    return (
      <form id="search-form" className="header-elem" onSubmit={this.handleSearch}>
        <input type="text" id="searchText" name="searchText" placeholder="enter a search" onChange={this.onChange}/>
        <button type="submit" className="nav-button"><span>🔍</span></button>
      </form>
    );
  }
}