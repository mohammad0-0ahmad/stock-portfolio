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
        <Route path='/register' render={() => <EnteryPage shownCard='Registrering' />} />
        <Route path='/reset-password' component={EnteryPage} />
        <Route path='/login'>
          <Redirect to='/' />
        </Route>
        <Route path='/logout'>
          <Redirect to='/' />
        </Route>
        <Route path='/404' component={NotFoundPage} />
        <Route path='/' render={() => localStorage.sessionId ? <Dashboard /> : <EnteryPage />} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
