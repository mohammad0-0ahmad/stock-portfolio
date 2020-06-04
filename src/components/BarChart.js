import React from 'react'
import '../css/BarChart.css'

const BarChart = ({ sectors }) => {
    const amountSectorsToShow = 5;
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
            result.push({ percent })
        }
        return result
    }

    let i = 1;
    return (
        <div className='BarChart'>
            {
                calc().map(sector => {
                    i++;
                    return (
                        <div
                            key={i}
                            style={{
                                width: sector.percent
                            }}
                        ></div>
                    )
                })
            }
        </div>
    )
}
export default BarChart;