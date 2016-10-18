import React, { Component } from 'react';
import Layer from 'grommet/components/Layer';
import Form from 'grommet/components/Form';
import Header from 'grommet/components/Header';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Rest from 'grommet/utils/Rest';

export default class OrgAdd extends Component {

  constructor() {
    super();
    this.onNameChange = this.onNameChange.bind(this);
    this.onFormClose = this.onFormClose.bind(this);
    this.onDisplayNameChange = this.onDisplayNameChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      name: undefined,
      displayName: undefined
    };
  }

  onFormSubmit(e) {
    e.preventDefault();
    if (this.state.name && this.state.displayName) {
      Rest.post('/api/organizations', this.state).then((data)=>{
        window.top.location.href='/main/orgList';
      });
    }
  }

  onNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  onDisplayNameChange(e) {
    this.setState({
      displayName: e.target.value
    });
  }

  onFormClose(e) {
    e.preventDefault();
    window.top.location.href='/main/orgList';
  }

  render () {
    return <Layer align="center" closer={true} onClose={this.onFormClose} >
        <Form>
        <Header>
          <Title>Add a Todo Item</Title>
        </Header>
        <FormFields>
          <FormField label="Organization Name">
            <input type="text" onChange={this.onNameChange}/>
          </FormField>
          <FormField label="Organization ID">
            <input type="text" onChange={this.onDisplayNameChange}/>
          </FormField>
          <Footer pad={{vertical: 'medium'}} >
          <Tiles flush={false}>
            <Tile>
              <Button label="Ok" primary={true} onClick={this.onFormSubmit} />
            </Tile>
            <Tile>
              <Button label="Cancel" secondary={true} onClick={this.onFormClose}/>
            </Tile>
          </Tiles>
          </Footer>
        </FormFields>
      </Form>
      </Layer>;
  }
}
