import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import '../css/Dashboard.css'
import NavBar from './NavBar'
import HomeCard from './HomeCard'
import PortFolio from './PortFolioCard';
import SettingCard from './SettingCard';

const Dashboard = () => {
    const history = useHistory()
    return (
        <div id="Dashboard">
            <NavBar />
            <Switch>
                <Route path='/' exact={true} component={HomeCard} />
                <Route path='/portfolio' component={PortFolio} />
                <Route path='/settings' component={SettingCard} />
                <Route path='/' render={()=>{history.push('/404')}} />
            </Switch>
        </div>
    )
}

export default Dashboard;