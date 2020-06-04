import React from 'react'
import './css/BarChart.css'

const BarChart = ({ amountSectorsToShow, colors, sectors }) => {

    const calc = () => {
        const sectorsSum = sectors.reduce((result, number) => result + number)
        const result = []
        for (let i = 0; i < amountSectorsToShow; i++) {
            let percent;
            if (i === amountSectorsToShow - 1 && amountSectorsToShow !== sectors.length) {
                const restSum = sectors.splice(i, sectors.length).reduce((result, number) => result + number)
                percent = `${restSum * 100 / sectorsSum}%`
            } else {
                percent = `${sectors[i] * 100 / sectorsSum}%`
            }
            result.push({ percent, bgColor: colors[i] })
        }
        return result
    }

    if (amountSectorsToShow !== colors.length || amountSectorsToShow > sectors.length) {
        return <div>{undefined}</div>
    } else
        return (
            <div className='BarChart'>
                {
                    calc().map(sector => {
                        return (
                            <div
                                key={sector.bgColor + sector.bgColor}
                                style={{
                                    width: sector.percent,
                                    backgroundColor: sector.bgColor
                                }}
                            ></div>
                        )
                    })
                }
            </div>
        )
}
export default BarChart;