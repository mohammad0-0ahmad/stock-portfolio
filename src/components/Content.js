import React from 'react';
import '../css/Content.css'

const Content = ({ title, lastUpdate, welcomeBar = '', children }) => {
    return (
        <div id="Content" >
            <header>
                {title &&
                    <h2 className="title">{title}</h2>
                }
                {lastUpdate &&
                    <p className="updated">
                        Senast uppdaterat {lastUpdate}
                    </p>
                }
            </header>
            {
                welcomeBar
            }
            <div id="contentItems">
                {
                    children
                }
            </div>
        </div>
    )
}

export default Content;