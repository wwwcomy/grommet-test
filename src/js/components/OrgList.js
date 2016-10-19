import React, { Component } from 'react';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Article from 'grommet/components/Article';
import OrganizationIcon from 'grommet/components/icons/base/Organization';
import Rest from 'grommet/utils/Rest';
import Button from 'grommet/components/Button';
import { browserHistory } from 'react-router';
import BreadCrumbNav from './BreadCrumbNav';

export default class OrgList extends Component {

  constructor () {
    super();
    this.crumbs=[{
      key : 'Organization List'
    }];
    this.state = {orgList:[]};
    this.addOrg = this.addOrg.bind(this);
    this.selectOrg = this.selectOrg.bind(this);
  }

  componentWillMount () {
    Rest.get('/api/organizations').then((data)=>{
      var state = this.state;
      this.setState({orgList: state.orgList.concat(data.body.organizations)});
    });
  }
  
  addOrg(e) {
    e.preventDefault();
    browserHistory.push('/main/orgAdd'); 
  }

  selectOrg(index) {
    browserHistory.push('/main/organizations/'+this.state.orgList[index].name); 
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
      <div>
      <BreadCrumbNav crumbs = {this.crumbs}/>
      <Article pad={{'horizontal' : 'large'}}>
        <Header justify="between">
            <Title>
                Organization List
            </Title>
            <Button label="Add Organization" primary={true} onClick = {this.addOrg} />
        </Header>
        <List onSelect={this.selectOrg} selectable={true} ref="list">
          {orgJsxArray}
        </List>
      </Article>
      </div>
    );
  }
};
