import {SELECT_CITY, REMOVE_CITY} from './selected_cities_types'

const initial_state = {
  selectedCitiesArray:[]
}

export const selectedCitiesReducer = (state = initial_state, action) => {
  switch (action.type) {
    case SELECT_CITY:
      return {...state, selectedCitiesArray:state.selectedCitiesArray.concat(action.selectedCity)}
    case REMOVE_CITY:
      state.selectedCitiesArray.splice(action.key, 1)
      return {...state, selectedCitiesArray:state.selectedCitiesArray}
    default:
      return {...state}
  }
}
