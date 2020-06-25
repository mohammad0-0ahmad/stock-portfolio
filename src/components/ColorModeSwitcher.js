import React, { useState, useEffect } from 'react'
import '../css/ColorModeSwitcher.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const ColorModeSwitcher = () => {
    const [darkMode, setDarkMode] = useState(localStorage.darkMode === 'true' ? true : false)
    const colors = [
        { name: '--color2', light: '#ffffff', dark: '#292929' },
        { name: '--color7', light: '#656565', dark: '#ffffff' },
        { name: '--color8', light: '#a1a8c3', dark: '#939393' },
        { name: '--color13', light: '#3c4368', dark: '#ffd98d' },
        { name: '--color17', light: '#3d4465', dark: '#ffffff' },
        { name: '--color18', light: '#f6fafb', dark: '#323231' },
        { name: '--color19', light: '#3c3c3b', dark: '#ffffff' },
        { name: '--color20', light: '#edeff3', dark: '#323231' },
        { name: '--color21', light: '#feebc4', dark: '#323231' },
        { name: '--color23', light: '#575962', dark: '#d4d4d4' }
    ]
    const switchColorMode = function (selectedMode) {
        for (var i = 0; i < colors.length; i++) {
            const value = selectedMode ? colors[i].dark : colors[i].light;
            document.documentElement.style.setProperty(colors[i].name, value)
        }
        localStorage.darkMode = selectedMode;
        setDarkMode(selectedMode)
    }
    useEffect(() => {
        if (darkMode) {
            switchColorMode(true)
        }
    }, [])

    return (
        <div id='ColorModeSwitcher' onClick={() => switchColorMode(!darkMode)}>
            <span className={darkMode ? 'dark' : ''}></span>
            <div className={darkMode ? '' : 'light'}><FontAwesomeIcon icon={faSun} /></div>
            <div className={darkMode ? 'dark' : ''}><FontAwesomeIcon icon={faMoon} /></div>
        </div>
    )
}

export default ColorModeSwitcher;