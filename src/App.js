import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import EnteryPage from './components/EnteryPage'
import NotFoundPage from './components/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact={true}>
          <Redirect to='/' />
        </Route>
        <Route path='/logout' exact={true}>
          <Redirect to='/' />
        </Route>
        <Route path='/404' component={NotFoundPage} exact={true}/>
        <Route path='/' render={() => localStorage.sessionId ? <Dashboard /> : <EnteryPage />} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
