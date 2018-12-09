import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';

import LandingHero from '../../components/LandingHero';
import About from '../../components/About';

class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <LandingHero />
        <About />
      </Fragment>
    );
  }
}

export default LandingPage;