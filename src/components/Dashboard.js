import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import '../css/Dashboard.css'
import NavBar from './NavBar'
import HomeCard from './HomeCard'
import PortFolio from './PortFolioCard';
import SettingCard from './SettingCard';
import { fetchJSON } from '../utilities/fetchData'

const Dashboard = () => {
    const history = useHistory()
    const [validSession, setValidSession] = useState()

    useEffect(() => {
        document.documentElement.scrollTop = 0
        
        fetchJSON('/verify', null, (data) => {
            if (!data.status) {
                localStorage.removeItem('sessionId');
                history.push('/logout')
                setValidSession(false);
            } else {
                setValidSession(true)
            }
        })
    })

    if (validSession) {
        return (
            <div id="Dashboard">
                <NavBar />
                <Switch>
                    <Route path='/' exact={true} component={HomeCard} />
                    <Route path='/portfolio' exact={true} component={PortFolio} />
                    <Route path='/settings' exact={true} component={SettingCard} />
                    <Route path='/' render={() => { history.push('/404') }} />
                </Switch>
            </div>
        )
    } else if (validSession === undefined) {
        return <div></div>
    }
}

export default Dashboard;