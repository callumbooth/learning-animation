import React from 'react'
import { useSpring, animated } from 'react-spring'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import './App.scss'

function App() {
  const [mainImage, setMainImage, stopMainImage] = useSpring(() => ({
    width: '200%',
    height: '200%',
    clipPath: 'polygon(25% 25%, 100% 0%, 75% 75%, 0% 100%)',
    transform: 'translate(-50%,-50%)',
    config: { tension: 30, friction: 12 }
  }))

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
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            {() => {
              stopMainImage()
              setMainImage({
                width: '75%',
                height: '50%',
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                transform: 'translate(-50%, -50%)'
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
            }}
          </Route>
          <Route exact path='/product'>
            {() => {
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
            }}
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
