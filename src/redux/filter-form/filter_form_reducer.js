import {GET_CITY_LIST,REMOVE_CITY_LIST} from './filter_form_types'
import {loadState} from '../../localStorage'

const initial_state = {
  cityList:[],
  query:''
}

export const filterFormReducer = (state = initial_state, action) => {
  if (state === initial_state){
    state = loadState().state.filterForm
  }
  switch (action.type){
    case GET_CITY_LIST:
      return {...state,cityList:[...action.cityList],query:action.query}
    case REMOVE_CITY_LIST:
      return {...state,cityList:[]}
    default:
      return {...state}
  }
}
