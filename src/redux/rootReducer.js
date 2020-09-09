import {combineReducers} from 'redux'

import {filterFormReducer} from './filter-form/filter_form_reducer'

export const rootReducer = combineReducers({
  filterForm:filterFormReducer
})
