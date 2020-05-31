import React from 'react'
import "./css/PreferedIndustries.css";

const PreferedIndustries = ({headingColor, industriesColor,industries}) => {
    let style = {
        color: headingColor
    }
    let indStyle = {
        color: industriesColor
    }


industries =industries.map(sector => <p key={sector}>{sector}</p>)

    return <div><p style={style}>Föredragna Industrier</p><div className='indGrid' style={indStyle}>{industries.length>0 ? industries : 'Inga industrier valda än'}</div>
    
       </div>
        
}

export default PreferedIndustries;