import React, { Component } from 'react';
import Button from 'grommet/components/Button';
import HPELogo from './HPELogo';

export default class LoginBtn extends Component {
  constructor() {
    super();
    this.startLogin = this.startLogin.bind(this);
  }

  startLogin() {
  }

  render() {
    return (
    <div>
      <div id='logo' >
        <HPELogo />
      </div>
      <div id='btn'><Button label = "Login" href='/login/doLogin' primary = {true} /></div>
    </div>);
  }
}
