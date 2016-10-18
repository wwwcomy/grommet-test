import React, { Component } from 'react';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Article from 'grommet/components/Article';
import OrganizationIcon from 'grommet/components/icons/base/Organization';
import Rest from 'grommet/utils/Rest';
import Button from 'grommet/components/Button';

export default class OrgList extends Component {

  constructor () {
    super();
    this.state = {orgList:[]};
  }

  componentWillMount () {
    Rest.get('/api/organizations').then((data)=>{
      var state = this.state;
      console.log(data.body);
      this.setState({orgList: state.orgList.concat(data.body.organizations)});
    });
  }

  render () {
    let orgList = this.state.orgList;
    let orgJsxArray = [];
    orgList.map((orgItem) => {
      orgJsxArray.push(
        <ListItem justify="between" key={orgItem.name}>
          <span>
            <OrganizationIcon size="large" />
            <span>
              {orgItem.displayName}
            </span>
          </span>
        </ListItem>
      );
    });

    return (
      <Article pad={{'horizontal' : 'large'}}>
        <Header justify="between">
            <Title>
                Organization List
            </Title>
            <Button label="Add Organization" primary={true} href="/main/orgAdd" />
        </Header>
        <List>
          {orgJsxArray}
        </List>
      </Article>
    );
  }
};
