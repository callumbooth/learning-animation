import React, { useEffect } from 'react'
import { animated } from 'react-spring'
import { Link } from 'react-router-dom'
import '../App.scss'

function Home(props) {
  const {
    mainImage: { mainImage, setMainImage, stopMainImage }
  } = props

  useEffect(() => {
    setMainImage({
      width: '75%',
      height: '50%',
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      transform: 'translate(-50%, -50%)'
    })
    return () => stopMainImage
  }, [setMainImage, stopMainImage])

  // const image = useSpring({
  //   to: {
  //     transform: 'translate(0, 0)'
  //   },
  //   from: {
  //     transform: 'translate(20%, 0)'
  //   },
  //   config: { tension: 280, friction: 150 },
  //   delay: 2000
  // })

  return (
    <>
      Some title
      <animated.div className='main-wrapper' style={mainImage}>
        <Link to='/product'>
          <div className='main-image' />
        </Link>
      </animated.div>
    </>
  )
}

export default Home
