import React, { Component } from 'react';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Article from 'grommet/components/Article';
import OrganizationIcon from 'grommet/components/icons/base/Organization';
import { headers, buildQuery, processStatus } from 'grommet/utils/Rest';

export default class OrgList extends Component {

  constructor () {
    super();
    this.state = {orgList:[]};
  }

  componentWillMount () {

  }

  render () {
    let orgList = this.state.orgList;
    let orgJsxArray = [];
    orgJsxArray.push(<List>
          <ListItem justify="between" key="Alan">
            <span>
              <OrganizationIcon size="large" />
              Alan
            </span>
            <span className="secondary">
              happy
            </span>
          </ListItem>
        </List>);
    for(org in orgList) {
      orgJsxArray.push(
        <ListItem justify="between" key={org.name}>
          <span>
            <OrganizationIcon size="large" />
            org.displayName
          </span>
        </ListItem>
      );
    }
    return (
      <Article pad={{'horizontal' : 'large'}}>
        <Header justify="between">
            <Title>
                Organization List
            </Title>
        </Header>
        <List>
          {orgJsxArray}
        </List>
      </Article>
    );
  }
};
