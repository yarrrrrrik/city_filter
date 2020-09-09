import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {removeSelectedCityAction} from '../redux/selected-cities/selected_cities_actions'


function SelectedCities() {
  const selectSelectedCities = useSelector(state => (state.selectedCities.selectedCitiesArray))
  const dispatch = useDispatch()

  return (
    <div className="selected-cities" >
      <ul>
        {
          selectSelectedCities.map((city, i) => {
            return <li key={i}> {city} <button onClick={ () => dispatch(removeSelectedCityAction(i)) }>x</button> </li>
          })

        }
      </ul>

    </div>
  )
}

export default SelectedCities
