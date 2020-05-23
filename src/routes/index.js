import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../pages/home'
import Products from '../pages/products'
import Cases from '../pages/cases'
import About from '../pages/about'

export default function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/products' component={Products} />
            <Route path='/cases' component={Cases} />
            <Route path='/about' component={About} />
        </Switch>
    )
}