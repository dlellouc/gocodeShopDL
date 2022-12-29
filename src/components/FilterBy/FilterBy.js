import React from 'react'
import './FilterBy.css'
import {productsCategories} from '../../data/data.js'

let allProductsFilterOptionsArr = [...productsCategories];
allProductsFilterOptionsArr.unshift('all');

// const jacketsFilterOptionsArr = ['All Jackets', '2016', 'jacket', 'Jackets', 'layers', 'Obermeyer', 'Roxy', 'womens'];

const FilterBy = () => {
  return (
    <div className='collection-sort'>
      <label>Filter by:</label>
        <select>
          {allProductsFilterOptionsArr.map((item, index) => <option key={index} value='/'>{item}</option>)}
        </select>
    </div>
  )
}

export default FilterBy