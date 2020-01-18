import React from 'react'
import { animated } from 'react-spring'
import { Link } from 'react-router-dom'

import '../App.scss'

function App(props) {
  const {
    image: { mainImage, setMainImage, stopMainImage }
  } = props

  stopMainImage()
  setMainImage({
    width: '35%',
    height: '50%',
    clipPath: 'polygon(0% 10%, 100% 0%, 100% 80%, 0% 100%)',
    transform: 'translate(-80%, -50%)'
  })

  return (
    <>
      Some product
      <animated.div className='main-wrapper' style={mainImage}>
        <Link to='/'>
          <div className='main-image' />
        </Link>
      </animated.div>
    </>
  )
}

export default App
