import React from 'react';
import './css/WelcomeBar.css'

const WelcomeBar = ({bgColor, name, updated,hasStocks}) => {
    let style = {
        backgroundColor: bgColor,
    }
    if (hasStocks) {
        return <div id= 'WelcomeBar' style={style}><p>Välkommen </p><p className='bold'>{name}!</p><p> Ditt innehav blev senast uppdaterat </p><p className='bold'>{updated}</p><p>. Ta gärna en titt!</p></div>
    }
    else {
        return <div id= 'WelcomeBar' style={style}><p>Välkommen </p><p className='bold'>{name}!</p><p> Du har inte något innehav tillagt ännu. Du får ett mail så fort det är uppdaterat!</p></div>

    }
} 

export default WelcomeBar;