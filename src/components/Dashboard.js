import React,{useState} from 'react';
import '../css/Dashboard.css'
import Content from './Content';
import NavBar from './NavBar'

export const PAGES = ['Hem', 'Min Portfölj', 'Inställningar']

const Dashboard = (props) => {
    
    let content = {
        title: "Hem",
        name: "Magnus",
        updated: "2020-02-26",
        showLatestUpdate: true,
    }
    const [current,setCurrent] = useState(PAGES[0])
    
    return (
        <div id="Dashboard">
            {/* Here nav before content element */}
            <NavBar items={PAGES} select={current} handleSelect={setCurrent} />
            <Content content={content} />
        </div>
    )
}

export default Dashboard;