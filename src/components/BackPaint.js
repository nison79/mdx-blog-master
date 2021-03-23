import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'


const BackPaint = () => {
  return (
    <div>
      <StaticImage 
        src="../images/paint.svg"
        alt="paint"
        layout="constrained"
        width={1000}
        // aspectRatio={4/3}
      />
    </div>
  )
}

export default BackPaint
