import React, { Component } from 'react';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Article from 'grommet/components/Article';
import OrganizationIcon from 'grommet/components/icons/base/Organization';

export default class OrgList extends Component {

  constructor () {
    super();
    
  }

  componentWillMount () {

  }

  render () {
    return (
      <Article pad={{'horizontal' : 'large'}}>
        <Header justify="between">
            <Title>
                Organization List
            </Title>
        </Header>
        <List>
          <ListItem justify="between">
            <span>
              <OrganizationIcon size="large" />
              Alan
            </span>
            <span className="secondary">
              happy
            </span>
          </ListItem>
        </List>
      </Article>
    );
  }
};
