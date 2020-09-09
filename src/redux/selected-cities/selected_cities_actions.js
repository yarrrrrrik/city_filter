import { SELECT_CITY } from './selected_cities_types'

export const selectCityAction = (city) => ({type:SELECT_CITY,selectedCity:city})
