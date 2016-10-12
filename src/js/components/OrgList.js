import React, { Component } from 'react';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';

export default class OrgList extends Component {

  constructor () {
    super();
  }

  render () {

    return (
	<div>
	    <Header justify="between" pad={{'horizontal' : 'medium'}}>
            <Title>
                Organization List
            </Title>
        </Header>
      <List>
        <ListItem justify="between">
          <span>
            Alan
          </span>
          <span className="secondary">
            happy
          </span>
        </ListItem>
        <ListItem justify="between">
          <span>
            Chris
          </span>
          <span className="secondary">
            cool
          </span>
        </ListItem>
        <ListItem justify="between">
          <span>
            Eric
          </span>
          <span className="secondary">
            odd
          </span>
        </ListItem>
      </List>
	</div>
    );
  }
};
