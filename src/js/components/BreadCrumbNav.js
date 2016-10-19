import React, { Component } from 'react';
import Anchor from 'grommet/components/Anchor';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import { browserHistory } from 'react-router';

export default class BreadCrumbNav extends Component {
  constructor() {
    super();
    this.onCrumbClick = this.onCrumbClick.bind(this);
  }

  onCrumbClick(href) {
    browserHistory.push(href);
  }

  render () {
    let crumbs = this.props.crumbs;
    let anchors = [];
    crumbs.map((crumb) => {
      if(crumb.href) {
        anchors.push(
              <Tile key={crumb.key}>
                  <Anchor onClick={this.onCrumbClick.bind(this, crumb.href)} label={crumb.key}  />
              </Tile>
            );
      } else {
        anchors.push(
                <Tile key={crumb.key}>
                     {crumb.key}
               	</Tile>
               );
      }
      anchors.push(<Tile key={crumb.key + '_slash'}>/</Tile>);
    });
    return (<div><Tiles direction="row" flush={false} pad={{vertical:'none'}}>
    {anchors.slice(0,-1)}
    </Tiles>
    <hr/ >
    </div>);
  }
}
