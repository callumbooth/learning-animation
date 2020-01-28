import React, { useEffect } from 'react'
import { useSpring } from 'react-spring'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Product from './pages/Product'

import './App.scss'

function App() {
  const [mainImage, setMainImage, stopMainImage] = useSpring(() => ({
    width: '200%',
    height: '200%',
    clipPath: 'polygon(25% 25%, 100% 0%, 75% 75%, 0% 100%)',
    transform: 'translate(-50%,-50%)',
    config: { tension: 30, friction: 12 }
  }))

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home mainImage={{ mainImage, setMainImage, stopMainImage }} />
          </Route>
          <Route exact path='/product'>
            <Product image={{ mainImage, setMainImage, stopMainImage }} />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
