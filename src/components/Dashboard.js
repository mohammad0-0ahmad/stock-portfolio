import React from 'react';
import './css/Dashboard.css'

const Dashboard = (props) => {
    return (
        <div id="Dashboard" style={myStyle}>
        
        </div>
    )
}

const colors = {
    background: '#F6FAFB',
    navBg: '#3C3C3B',
    selectedNavItem: '#FDCC6B',
    selectedNavItemBg: '#292929',
    unselectedNavItem: '#C9B791',
    unselectedNavItemBg: '#363636',
    contentTitle: '#656565',
    homeText: ['#3D4465', '#A1A8C3', '#646C9A' , '#868AA8'],
    greetingBarBg: '#FFD98D',
    contentItemBg: '#FFFFFF',
    contentItemSh: '#45414E14',
    contentItemTitle: '#3C4368',
    chart:['#5B74FF','#FD397A','#34BFA3','#3D4465','#A1A8C3 ']
}

const myStyle = {
    backgroundColor: colors.background
}

export default Dashboard;