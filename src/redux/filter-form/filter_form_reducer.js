import {GET_CITY_LIST} from './filter_form_types'

const initial_state = {
  cityList:[]
}

export const filterFormReducer = (state = initial_state, action) => {
  switch (action.type){
    case GET_CITY_LIST:
    console.log(action.cityList);
      return {...state,cityList:[...action.cityList]}
    default:
      return {...state}
  }
}
