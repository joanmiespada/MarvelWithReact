import React, { Component } from 'react';
import {getHeroes} from '../actions/marvelapi';
import { connect } from 'react-redux';

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
                <input type="text" onChange={(ev) => this.updateFilter(ev) }/>
                <List items={this.props.heroes}  />
            </div>
        )
    }
}

//  
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