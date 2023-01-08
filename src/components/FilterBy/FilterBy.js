import React from 'react'
import './FilterBy.css'
import {productsCategories} from '../../data/data.js'

// let allProductsFilterOptionsArr = [...productsCategories];
// allProductsFilterOptionsArr.unshift(allProductsCategoryString);

// const jacketsFilterOptionsArr = ['All Jackets', '2016', 'jacket', 'Jackets', 'layers', 'Obermeyer', 'Roxy', 'womens'];

const FilterBy = ({productsCategoriesWithAll, filterProductsByCategory}) => {
  return (
    <div className='collection-sort'>
      <label>Filter by:</label>
        <select onChange={(event) => filterProductsByCategory(event.target.value)}>
          {productsCategoriesWithAll.map(
            (item, index) => <option key={index} value={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</option>)}
        </select>
    </div>
  )
}

export default FilterBy