import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Login } from './Pages/Login/Index'
import { Home } from './Pages/Home/Index'
import { Contato } from './Pages/Contato/Index'
import { NotFound } from './components/NotFound'
import { PrivateRoute } from './components/PrivateRoute'


export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path='/' component={Home} />
        <PrivateRoute exact path='/contato' component={Contato} />
        <Route exact path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

