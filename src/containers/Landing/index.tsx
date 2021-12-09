import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import './Landing.scss';
import { SIDE_PAGES, SPACE_HOLDER } from '../../constants';

export default class Landing extends Component {
  constructor(props: any) {
    super(props);
  }

  buildLanding = () => {
    let res: JSX.Element[] = [];
    // build div for each side page
    SIDE_PAGES.forEach((SIDE_PAGE, i) => {
      const subpage_title = SIDE_PAGE.replace(SPACE_HOLDER, ' ');
      const subpage_path = '/' + SIDE_PAGE;
      res.push(
        <div className='content-tab' key={i}>
          <Link to={subpage_path}>
            <h1>{subpage_title}</h1>
          </Link>
        </div>
      );
    });
    return (
      <div id='landing-container'>
        <div id='content-container'>
          {res}
        </div>
      </div>
    );
  }

  render() {
    return (
      <Fragment>
        {this.buildLanding()}
        <Footer />
      </Fragment>
    );
  }
}
