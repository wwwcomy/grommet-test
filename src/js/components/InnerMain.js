import React, { Component } from 'react';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Sidebar from 'grommet/components/Sidebar';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import Split from 'grommet/components/Split';
import CloseIcon from 'grommet/components/icons/base/Close';

export default class InnerMain extends Component {

  constructor() {
    super();
    this._onClose = this._onClose.bind(this);
  }

  componentDidMount() {
    document.body.classList.remove('loading');
  }

  _onClose() {
  }

  render () {
    return (
      <div>


        <Split flex="right">
          <Sidebar size="small" colorIndex="neutral-1">
            <Header justify="between" pad={{horizontal: 'medium'}}>
              <Title onClick={this._onClose} a11yTitle="Close Menu" responsive={true}>
                Menu
              </Title>
              <Menu responsive={true}>
                <Button plain={true} a11yTitle="Close Menu"
                  onClick={this._onClose} icon={<CloseIcon />} />
              </Menu>
            </Header>
            <Menu primary={true}>
              <Anchor>
                SAML Configuration
              </Anchor>
              <Anchor>
                LDAP Configuration
              </Anchor>
              <Anchor>
                Groups
              </Anchor>
            </Menu>
          </Sidebar>
          {this.props.children}
        </Split>
        
        <Footer primary={true} appCentered={true} direction="column"
          align="center" pad="small" colorIndex="grey-1">
          <p>
            Build your ideas with <a href="http://grommet.io" target="_blank">Grommet</a>!
          </p>
        </Footer>
      </div>
    );
  }
};
