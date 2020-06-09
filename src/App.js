import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard'
import EnteryPage from './components/EnteryPage'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <>
      {
        loggedIn ? <Dashboard /> : <EnteryPage handleLogin={() => setLoggedIn(true)} />
      }
    </>
  )
}

export default App;
