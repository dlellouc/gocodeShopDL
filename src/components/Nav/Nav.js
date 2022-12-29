import React from 'react'
import FilterBy from '../FilterBy/FilterBy'
import SortBy from '../SortBy/SortBy'
import './Nav.css'

const Nav = ({productName, filterProductsByCategory}) => {
  return (
    <nav className='product-filter'>
      <h1>{productName}</h1>
      <div className='sort'>
        <FilterBy filterProductsByCategory={(newCategory) => filterProductsByCategory(newCategory)} />
        <SortBy />        
      </div>
    </nav>
  )
}

export default Nav