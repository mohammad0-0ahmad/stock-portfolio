import React from 'react';
import '../css/Dashboard.css'
import Content from './Content';

const Dashboard = (props) => {
    let content = {
        title: "Hem",
        name: "Magnus",
        updated: "2020-02-26",
        showLatestUpdate: true,
    }
    return (
        <div id="Dashboard">
            {/* Here nav before content element */}
            <Content content={content} />
        </div>
    )
}

export default Dashboard;