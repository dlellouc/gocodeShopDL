import React, { useContext } from 'react'
import ProductsContext from '../../contexts/ProductsContext';
import './FilterBy.css'

const FilterBy = () => {
  const { productsCategoriesWithAll, setCurrentCategory } = useContext(ProductsContext);

  return (
    <div className='collection-sort'>
      <label>Filter by:</label>
        <select onChange={(event) => setCurrentCategory(event.target.value)}>
          {productsCategoriesWithAll.map(
            (item, index) => <option key={index} value={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</option>)}
        </select>
    </div>
  )
}

export default FilterBy