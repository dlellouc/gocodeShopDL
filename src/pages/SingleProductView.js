import React from 'react'
import { useParams } from 'react-router-dom'

const SingleProductView = () => {
    const params = useParams();

  return (
    <div>SingleProductView : {params.productId}</div>
  )
}

export default SingleProductView