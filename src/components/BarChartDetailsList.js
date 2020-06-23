import React from 'react'
import '../css/BarChartDetailsList.css'
import BarChartSectorDetails from './BarChartSectorDetails'

const BarChartDetailsList = ({ data, currency }) => {
    return (
        <div className='BarChartDetailsList'>
            {data &&
                data.map(({ industry, companies, value }, key) =>
                    <BarChartSectorDetails
                        key={key}
                        industry={industry}
                        companies={companies}
                        value={value}
                        currency={currency}
                    />
                )
            }
        </div>
    )
}
export default BarChartDetailsList; 