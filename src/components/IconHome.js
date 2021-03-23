import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const IconHome = () => {
  return (
    <div>
      <StaticImage
      src='../images/home.svg'
      width={30}
      alt="icon-home"
      />
    </div>
  )
}

export default IconHome
