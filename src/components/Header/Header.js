import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
        <Link to={"/"}>Home     </Link>
        <Link to={"about"}>About    </Link>
        <Link to={"about/about2"}>About2    </Link>
        <Link to={"termsOfAgreement"}>Terms</Link>
    </div>
  )
}
