import React from 'react'
import '../css/BarChartDetailsList.css'
import BarChartSectorDetails from './BarChartSectorDetails'

const BarChartDetailsList = ({ data }) => {
    const AMOUNT_SECTORS_TO_SHOW = 5
    const dataArray = (data.length > AMOUNT_SECTORS_TO_SHOW ? data.slice(0, AMOUNT_SECTORS_TO_SHOW) : data)
    return (
        <div className='BarChartDetailsList'>
            {dataArray.map(({ title, details, amount }, key) =>
                <BarChartSectorDetails key={key} title={title} details={details} amount={amount} />
            )}
        </div>
    )

}
export default BarChartDetailsList; 