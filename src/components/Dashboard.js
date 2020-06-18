import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import '../css/Dashboard.css'
import NavBar from './NavBar'
import HomeCard from './HomeCard'
import PortFolio from './PortFolioCard';
import SettingCard from './SettingCard';
import { fetchJSON } from '../utilities/fetchData'

const Dashboard = () => {
    const history = useHistory()

    useEffect(() => {
        document.documentElement.scrollTop = 0
    })

    fetchJSON('/verify', { session: localStorage.sessionId }, (data) => {
        if(!data.status){
            localStorage.clear()
            history.push('/logout')
        }
    })

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
}

export default Dashboard;