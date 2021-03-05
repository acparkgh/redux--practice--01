import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddPerson from '../components/AddPerson/AddPerson';
import Person from '../components/Person/Person';
import * as actionType from '../Store/actions';

class Persons extends Component {
    // state = {
    //     persons: []
    // }

    /* personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.concat(newPerson)}
        } );
    } */

  /*  personDeletedHandler = (personId) => {
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.filter(person => person.id !== personId)}
        } );
    } */

    render () {
        return (
            <div>
                {/* <AddPerson personAdded={this.personAddedHandler} /> */}
                <AddPerson personAdded={ this.props.onAddPerson } />
                {/* {this.state.persons.map(person => ( */}
                {this.props.personList.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onDeletePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        personList: state.persons,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        onAddPerson: (name, age) => {
          dispatch({ type: actionType.ADD_PERSON_TO_STATE,
                     payload: { personName: name, personAge: age } 
          })
        },
        onDeletePerson: (clickedPersonID) => {
          dispatch({ type: actionType.DELETE_PERSON_FROM_LIST, 
                     payload: { personID: clickedPersonID } 
                  })
        },
    });
}

export default connect( mapStateToProps, mapDispatchToProps )(Persons);