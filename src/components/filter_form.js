import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

import {getCityListAction,removeCityListAction} from '../redux/filter-form/filter_form_actions'
import {selectCityAction} from '../redux/selected-cities/selected_cities_actions'

function FilterForm() {

  const dispatch = useDispatch()
  const selectCityList = useSelector(state => state.filterForm.cityList)
  let inputValue = ''
  function get(e) {
    inputValue = e.target.value
    if (inputValue.length > 2) {
      dispatch(getCityListAction(inputValue))
    }else{
      dispatch(removeCityListAction())
    }
  }


  return (
    <div className="filter-form" >
      <form action="">
        <input type="text" className="searchInput" onChange={get}/>
      </form>
      <ul>
        {
          selectCityList.map((city, i) => {
            return <li key={i}>{city} <button onClick={() => {
                dispatch(selectCityAction(city))
                dispatch(removeCityListAction())
                document.querySelector('.searchInput').value = ''
              }}>+</button> </li>
          })
        }
      </ul>
    </div>
  )
}

export default FilterForm
