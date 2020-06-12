import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import EnteryPage from './components/EnteryPage'

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
        <Route path='/' render={() => localStorage.sessionId ? <Dashboard /> : <EnteryPage />} />
        {/** 404 */}
      </Switch>
    </BrowserRouter>
  )
}

export default App;
