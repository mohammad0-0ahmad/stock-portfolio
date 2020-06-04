import React from 'react';
import '../css/WelcomeBar.css'

const WelcomeBar = ({ name, updated, hasStocks }) => {
    if (hasStocks) {
        return <div id='WelcomeBar' >Välkommen<span>{name}!</span>Ditt innehav blev senast uppdaterat<span>{updated}.</span> Ta gärna en titt!</div>
    }
    else {
        return <div id='WelcomeBar'>Välkommen<span>{name}!</span> Du har inte något innehav tillagt ännu. Du får ett mail så fort det är uppdaterat!</div>
    }
}

export default WelcomeBar;