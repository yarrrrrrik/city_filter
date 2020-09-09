import {GET_CITY_LIST} from './filter_form_types'

export const getCityList = (query) => {
  return async function getCityListRequest(dispatch){
    let api_url = `http://geodb-free-service.wirefreethought.com/v1/geo/cities?namePrefix=${query}&limit=5&offset=0&hateoasMode=false`
    let citiesRequest = await fetch(api_url)
    let citiesResponse = await citiesRequest.json()
    let cityList = citiesResponse.data.map((item) => (item.city))
    console.log(cityList);
    dispatch({type:GET_CITY_LIST,cityList})
  }
}


// const closeIssues = () => ({type:types.CLOSE_ISSUES})