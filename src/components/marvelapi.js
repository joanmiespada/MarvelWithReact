import React, { Component } from 'react';
import {getHeroes} from '../actions/marvelapi';
import { connect } from 'react-redux';

import { Form, Button,FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

const List = ({ items, filterBy }) => {  
  return (
    <ul>
      {
        items
          //.filter(item => item.indexOf(filterBy) > -1)
          .map((item, i) => <li key={i}>{item.name}</li>)
      }
    </ul>
  )
}

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      {' '}
      <FormControl {...props} />
      {' '}
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class ListHeroes extends Component
{

    

    updateFilter =() => {
        //store.dispatch(setFilter(ev.target.value));
        //this.setState({ filter: ev.target.value });
        this.props.getHeroesClick();
    }

    render(){

        

        return (
            <div>
                <Form inline>               
                    <FieldGroup
                        id="formControlsText"
                        label="Search"
                        help=""
                        type="text"
                        placeholder="Enter name heroe"
                        /> 
                    
                    
                    <Button onClick={(ev) => this.updateFilter(ev) }>Search</Button>
                </Form>
                <List items={this.props.heroes}  />
            </div>
        )
    }
}

//  onChange={(ev) => this.updateFilter(ev) }
// 

const mapStateToProps = (state, ownProps) => {
  return { heroes: state.heroes }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getHeroesClick: () => { dispatch(getHeroes(ownProps.filter)) }
  }
}

const List_Heroes = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListHeroes)

export default List_Heroes;