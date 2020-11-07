import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import HomePage from './Home';

class About extends Component {
  handleClickContact = (event) => {
    // navigate to contact
    this.props.history.push('/contact');
  };

  render() {
    return (
      <div className="aboutPage">
        <h1>Nothing to see here but some students enjoying Halloween</h1>
        <p>We will all be professional developers soon making the big bucks!! WoooooHooooo!!!!</p>
      </div>
    );
  }
}

export default withRouter(About);
