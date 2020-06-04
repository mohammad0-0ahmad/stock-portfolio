import React from 'react'
import './css/BarChartSectorDetails.css'

const BarChartSectorDetails = ({ colors, data }) => {
    const {title, details, amount} = data
    const {sectorColor, titleColor, detailsColor} = colors

    return (
        <div className='BarChartSectorDetails'>
            <div style={{ backgroundColor: sectorColor }}></div>
            <div>
                <h3 style={{ color: titleColor }}>
                    {title}
                </h3>
                <p style={{ color: detailsColor }}>
                    {details}
                </p>
            </div>
            <div>
                <span style={{ color: titleColor }}>{amount}</span>
                <span style={{ color: detailsColor }}>SEK</span>
            </div>
        </div>
    )
}
export default BarChartSectorDetails;