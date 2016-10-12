import '../scss/index.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from 'grommet/components/App';


class Main extends Component {

  constructor() {
    super();
    this.startLogin = this.startLogin.bind(this);
    this.state = {
      count: 0
    };
  }

  startLogin() {
    
  }

  render () {
    return (
      <App centered={false}>
        <loginBtn />
      </App>
    );
  }
};

let element = document.getElementById('btn');
ReactDOM.render(React.createElement(Main), element);

