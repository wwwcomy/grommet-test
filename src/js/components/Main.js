import React, { Component } from 'react';
import App from 'grommet/components/App';

export default class Main extends Component {

  constructor() {
    super();
  }

  render () {
    return (
      <App centered={false}>
        {this.props.children}
      </App>
    );
  }
};
