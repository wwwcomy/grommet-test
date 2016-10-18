import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Rest from 'grommet/utils/Rest';

export default class OrgOverview extends Component {
  constructor() {
    super();
    this.state={
      name:undefined,
      displayName:undefined,
      testOrg:undefined,
      type:undefined,
      id:undefined
    };
  }

  componentWillMount () {
    Rest.get('/api/organizations/'+this.props.orgName).then((data)=>{
      console.log(data.body);
      this.setState(data.body);
    });
  }

  render() {
    return <Box pad={{'horizontal':'large'}} ref='Overview'>
              <h3>
                General Information
              </h3>
                <h4>This is your organizations profile. It provides information about your organization so that it is easily recognizable when referring back to it.</h4>
              <List>
          <ListItem justify="between">
            <span>
              Display Name
            </span>
            <span className="secondary">
              {this.state.displayName}
            </span>
          </ListItem>
          <ListItem justify="between">
            <span>
              Organization ID
            </span>
            <span className="secondary">
              {this.state.name}
            </span>
          </ListItem>
          <ListItem justify="between">
            <span>
              Organization Description
            </span>
            <span className="secondary">
            desc.
            </span>
          </ListItem>
          <ListItem justify="between">
            <span>
              Organization Image URL
            </span>
            <span className="secondary">
              URL
            </span>
          </ListItem>
        </List>
    </Box>;
  }
}
