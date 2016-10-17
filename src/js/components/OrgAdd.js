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

export default class OrgAdd extends Component {

  onFormSubmit () {
  	// Rest.post('/api/organizations', ).then((data)=>{
   //    console.log(data);
   //  });
  }

  onFormClose () {

  }

  render () {
    return <Layer align="center" closer={true} onClose={this.onFormSubmit} >
        <Form>
        <Header>
          <Title>Add a Todo Item</Title>
        </Header>
        <FormFields>
          <FormField label="Organization Name">
            <input type="text" />
          </FormField>
          <FormField label="Organization ID">
            <input type="text" />
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
      </Layer>
  }
}
