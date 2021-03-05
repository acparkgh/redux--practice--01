import * as actionType from './actions';

const initialState = {
  persons: [],
}

const reducer = ( state = initialState, action ) => {
  switch( action.type ) {

    case actionType.ADD_PERSON_TO_STATE:
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        // name: 'Max',
        name: action.payload.personName,
        // age: Math.floor( Math.random() * 40 )
        age: action.payload.personAge,
      }      
      return ({
        ...state, persons: state.persons.concat(newPerson)
      })

    case actionType.DELETE_PERSON_FROM_LIST:
      return({
        ...state, persons: state.persons.filter( person => action.payload.personID !== person.id )
      })    
  
  }

  return state;
}

export default reducer;