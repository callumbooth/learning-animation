import React, { useRef } from 'react'
import { useSpring } from 'react-spring'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Product from './pages/Product'

import './App.scss'

function App() {
  const mainImageObj = useRef()
  const [mainImage, setMainImage, stopMainImage] = useSpring(() => ({
    width: '200%',
    height: '200%',
    clipPath: 'polygon(25% 25%, 100% 0%, 75% 75%, 0% 100%)',
    transform: 'translate(-50%,-50%)',
    config: { tension: 30, friction: 12 }
  }))

  mainImageObj.current = { mainImage, setMainImage, stopMainImage }

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home mainImage={mainImageObj.current} />
          </Route>
          <Route exact path='/product'>
            <Product image={mainImageObj.current} />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
