import React from 'react'
import FilterBy from '../FilterBy/FilterBy'
import SortBy from '../SortBy/SortBy'
import './Nav.css'

const Nav = ({productName}) => {
  return (
    <nav className='product-filter'>
      <h1>{productName}</h1>
      <div className='sort'>
        <FilterBy />
        <SortBy />        
      </div>
    </nav>
  )
}

export default Nav