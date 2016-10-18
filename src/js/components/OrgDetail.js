import React, { Component } from 'react';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Header from 'grommet/components/Header';
import Tab from 'grommet/components/Tab';
import Tabs from 'grommet/components/Tabs';
import Title from 'grommet/components/Title';
import OrgOverview from './OrgOverview';

export default class OrgDetail extends Component {

  constructor () {
    super();
    this.onTabActive = this.onTabActive.bind(this);
  }

  componentWillMount(){
    console.log(this.props.params.orgName);
  }

  onTabActive(index){
  }

  deleteOrg () {

  }

  render () {
    return (
      <Article pad={{'horizontal' : 'large'}} >
        <Header justify="between">
            <Title>
                Organization Name
            </Title>
            <Button label="Delete" primary={false} onClick={this.deleteOrg} />
        </Header>
         <Tabs onActive={this.onTabActive}>
          <Tab title="Overview">
            <OrgOverview orgName={this.props.params.orgName} />
          </Tab>
          <Tab title="Languages">
            <Box pad={{'horizontal':'large'}}>
              <h3>
                Languages
              </h3>
              <p>
                Contents of the second tab
              </p>
            </Box>
          </Tab>
          <Tab title="Authentication">
            <h3>
              Authentication
            </h3>
            <p>
              Contents of the tab
            </p>
          </Tab>
          <Tab title="Customization">
            <h3>
              Customization
            </h3>
            <p>
              Contents of the tab
            </p>
          </Tab>
          <Tab title="Rols">
            <h3>
              Rols
            </h3>
            <p>
              Contents of the tab
            </p>
          </Tab>
          <Tab title="Groups">
            <h3>
              Groups
            </h3>
            <p>
              Contents of the tab
            </p>
          </Tab>
          <Tab title="Permissions">
            <h3>
              Permissions
            </h3>
            <p>
              Contents of the tab
            </p>
          </Tab>
          <Tab title="Impersonation">
            <h3>
              Impersonation
            </h3>
            <p>
              Contents of the tab
            </p>
          </Tab>
        </Tabs>
      </Article>
    );
  }
}
