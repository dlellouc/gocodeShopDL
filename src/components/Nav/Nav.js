import React from 'react'
import FilterBy from '../FilterBy/FilterBy'
import SortBy from '../SortBy/SortBy'
import './Nav.css'

const Nav = ({productsCategoriesWithAll, currentCategory, onFilterChange}) => {
  return (
    <nav className='product-filter'>
      <h1>{currentCategory}</h1>
      <div className='sort'>
        <FilterBy productsCategoriesWithAll={productsCategoriesWithAll} onFilterChange={(newCategory) => onFilterChange(newCategory)} />
        <SortBy />        
      </div>
    </nav>
  )
}

export default Nav