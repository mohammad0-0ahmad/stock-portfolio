import React from 'react'
import '../css/BarChartSectorDetails.css'

const BarChartSectorDetails = ({ title, details, amount }) => {
    return (
        <div className='BarChartSectorDetails'>
            <div></div>
            <div>
                <h3>
                    {title}
                </h3>
                <p>
                    {details}
                </p>
            </div>
            <div>
                <span>{amount}</span>
                <span> SEK</span>
            </div>
        </div>
    )
}
export default BarChartSectorDetails;