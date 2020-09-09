import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

import {getCityList} from '../redux/filter-form/filter_form_actions'

function FilterForm() {

  const dispatch = useDispatch()
  const selectCityList = useSelector(state => state.filterForm.cityList)
  function get(e) {
    let inputValue = e.target.value
    if (inputValue.length > 2) {
      dispatch(getCityList(inputValue))
    }
  }


  return (
    <div className="filter-form" >
      <form action="">
        <input type="text" onChange={get}/>
        <button onClick={get}>get</button>
      </form>
      <ul>
        {
            selectCityList.map((city, i) => {
              return <li key={i}>{city} <button onClick={() => {console.log(city)}}>+</button> </li>
            })

        }
      </ul>
    </div>
  )
}

export default FilterForm
