import React from 'react'
import "../css/PreferedIndustries.css";

const PreferedIndustries = ({ industries }) => {
    industries = industries.map(sector => <p key={sector}>{sector}</p>)

    return (
        <div className='PreferedIndustries'>
            <p>Föredragna Industrier</p>
            <div>
                {industries.length > 0 ? industries : 'Inga industrier valda än'}
            </div>
        </div>
    )

}

export default PreferedIndustries;