import React from 'react'
import '../css/BarChart.css'

const BarChart = ({ sectors }) => {
    const AMOUNT_SECTORS_TO_SHOW = 5;

    const calc = () => {

        if (!sectors || sectors.length === 0) {
            return <div className='emptyBarChar'></div>
        }

        const sectorsSum = sectors.reduce((result, number) => result + number)
        const result = []
        for (let i = 0; i < sectors.length; i++) {
            let percent;
            if (i === AMOUNT_SECTORS_TO_SHOW - 1 && AMOUNT_SECTORS_TO_SHOW < sectors.length) {
                const restSum = sectors.splice(i, sectors.length).reduce((result, number) => result + number)
                percent = `${restSum * 100 / sectorsSum}%`
            } else {
                percent = `${sectors[i] * 100 / sectorsSum}%`
            }
            result.push({ percent })
        }
        return result.map((sector, key) => {
            return (
                <div
                    key={key}
                    style={{
                        width: sector.percent
                    }}
                ></div>
            )
        })
    }

    return (
        <div className='BarChart'>
            {calc()}
        </div>
    )
}
export default BarChart;