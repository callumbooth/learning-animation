import React from 'react'
import { animated, useSpring } from 'react-spring'
import { Link } from 'react-router-dom'
import '../App.scss'

function Home(props) {
  const {
    mainImage: { mainImage, setMainImage, stopMainImage }
  } = props

  stopMainImage()
  setMainImage({
    width: '75%',
    height: '50%',
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    transform: 'translate(-50%, -50%)'
  })
  const image = useSpring({
    to: {
      transform: 'translate(0, 0)'
    },
    from: {
      transform: 'translate(20%, 0)'
    },
    config: { tension: 280, friction: 150 },
    delay: 2000
  })

  return (
    <>
      Some title
      <animated.div className='main-wrapper' style={mainImage}>
        <Link to='/product'>
          <animated.div className='main-image' styles={image} />
        </Link>
      </animated.div>
    </>
  )
}

export default Home
