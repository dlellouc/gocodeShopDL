import React, { useContext } from 'react'
import MyContext from '../../MyContext'
import './FilterBy.css'

const FilterBy = () => {
  const { productsCategoriesWithAll, setCurrentCategory } = useContext(MyContext);

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