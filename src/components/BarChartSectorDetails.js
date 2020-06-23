import React from 'react'
import '../css/BarChartSectorDetails.css'

const BarChartSectorDetails = ({ industry, companies, value, currency }) => {
    return (
        <div className='BarChartSectorDetails'>
            <div></div>
            <div>
                <h3>
                    {industry}
                </h3>
                <p>
                    {companies}
                </p>
            </div>
            <div>
                <span>{value}</span>
                <span> {currency}</span>
            </div>
        </div>
    )
}
export default BarChartSectorDetails;