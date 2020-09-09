import {SELECT_CITY, REMOVE_CITY} from './selected_cities_types'
import {loadState} from '../../localStorage'

const initial_state = {
  selectedCitiesArray:[]
}

export const selectedCitiesReducer = (state = initial_state, action) => {
  if (state === initial_state){
    state = loadState().state.selectedCities
  }
  switch (action.type) {
    case SELECT_CITY:
      return {...state, selectedCitiesArray:state.selectedCitiesArray.concat(action.selectedCity)}
    case REMOVE_CITY:
      state.selectedCitiesArray.splice(action.key, 1)//почему селектор срабатывает только так?
      return {...state, selectedCitiesArray:state.selectedCitiesArray.splice(action.key, 1)}
    default:
      return {...state}
  }
}
