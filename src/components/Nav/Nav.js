import React, { useContext } from 'react'
import MyContext from '../../MyContext'
import FilterBy from '../FilterBy/FilterBy'
import SortBy from '../SortBy/SortBy'
import './Nav.css'

const Nav = () => {
    const { currentCategory } = useContext(MyContext);

  return (
    <nav className='product-filter'>
      <h1>{currentCategory}</h1>
      <div className='sort'>
        <FilterBy />
        <SortBy />        
      </div>
    </nav>
  )
}

export default Nav