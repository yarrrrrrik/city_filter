import React from 'react';
import './App.css';
import FilterForm from './components/filter_form'
import SelectedCities from './components/selected_cities'


function App() {
  return (
    <div className="App">
      <FilterForm/>
      <SelectedCities/>
    </div>
  );
}

export default App;
