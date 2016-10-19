import React, { Component } from 'react';
import Anchor from 'grommet/components/Anchor';
import Footer from 'grommet/components/Footer';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import HPELogo from './HPELogo';
import { browserHistory } from 'react-router';

export default class InnerMain extends Component {

  constructor() {
    super();
    this._onClose = this._onClose.bind(this);
    this.toMainPage = this.toMainPage.bind(this);
  }

  componentDidMount() {
    document.body.classList.remove('loading');
  }

  toMainPage(e) {
    e.preventDefault();
    browserHistory.push('/main');
  }

  _onClose() {
  }

  render () {
    return (
      <div>
        <Header justify="between" size="large" direction="row" pad={{horizontal: 'large'}}>
          <div>
            <Anchor onClick={this.toMainPage} icon={<HPELogo size='small' />} />
            Identity Management
          </div>
          <Menu direction="row" responsive={false}>
            <a href="#" onClick={this._onClose}>Account</a>
          </Menu>
        </Header>

        {this.props.children}

        <Footer primary={true} direction="column" pad="small" >
          <p>
            © Copyright 2016 Hewlett Packard Enterprise Development LP
          </p>
        </Footer>
      </div>
    );
  }
};
