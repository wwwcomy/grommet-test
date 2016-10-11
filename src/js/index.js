import '../scss/index.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from 'grommet/components/App';
import Button from 'grommet/components/Button';


class Main extends Component {

  constructor() {
    super();
    this.startLogin = this.startLogin.bind(this);
    this.state = {
      count: 0
    };
  }

  startLogin() {
    var count = this.state.count;
    count++;
    this.setState({
      count: count
    });
    alert(this.state.count);
  }

  render () {
    return (
      <App centered={false}>
        <Button label="Login" onClick= {this.startLogin} primary={true} />
      </App>
    );
  }
};

let element = document.getElementById('btn');
ReactDOM.render(React.createElement(Main), element);

