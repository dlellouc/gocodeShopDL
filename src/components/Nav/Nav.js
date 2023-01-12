import React from 'react'
import FilterBy from '../FilterBy/FilterBy'
import SortBy from '../SortBy/SortBy'
import './Nav.css'

const Nav = ({productsCategoriesWithAll, currentCategory, setCurrentCategory}) => {
  return (
    <nav className='product-filter'>
      <h1>{currentCategory}</h1>
      <div className='sort'>
        <FilterBy productsCategoriesWithAll={productsCategoriesWithAll} setCurrentCategory={setCurrentCategory} />
        <SortBy />        
      </div>
    </nav>
  )
}

export default Nav