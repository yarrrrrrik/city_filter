import {SELECT_CITY} from './selected_cities_types'

const initial_state = {
  selectedCities:[]
}

export const selectedCitiesReducer = (state = initial_state, action) => {
  switch (action.type) {
    case SELECT_CITY:
      return {...state,selectedCities:state.selectedCities.concat(action.selectedCity)}
    default:
      return {...state}
  }
}
