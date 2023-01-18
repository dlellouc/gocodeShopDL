import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import SingleProductView from '../views/SingleProductView'
import AboutPage from '../views/AboutPage'
import NotFound from '../views/NotFound'


const RoutesAuthenticated = () => {
  return (
    <Routes>    
        <Route path="/" element={<App />} />
        <Route path="products/:productId" element={<SingleProductView />} />
        <Route path="about" element={<AboutPage />} />
        {/* {isAdmin && <Route path="about/about2" element={<Spinner />} /> } */}
        {/* <Route path="termsOfAgreement" element={<Spinner />} /> */}
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default RoutesAuthenticated