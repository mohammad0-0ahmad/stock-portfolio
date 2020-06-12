import React from 'react'
import Content from './Content'
import ContentItem from './ContentItem'
import StockTable from './StockTable'

const PortFolio = () => {
    /** */

    const stockTableData = [
        { a: 'Företag X', b: '20 000', c: 'A', d: '3000st', e: '1-3000', f: '1.0%', g: '1.0%' },
        { a: 'Företag X', b: '20 000', c: 'A', d: '3000st', e: '1-3000', f: '1.0%', g: '1.0%' },
        { a: 'Företag X', b: '20 000', c: 'A', d: '3000st', e: '1-3000', f: '1.0%', g: '1.0%' },
        { a: 'Företag X', b: '20 000', c: 'A', d: '3000st', e: '1-3000', f: '1.0%', g: '1.0%' },
        { a: 'Företag X', b: '20 000', c: 'A', d: '3000st', e: '1-3000', f: '1.0%', g: '1.0%' },
        { a: 'Företag X', b: '20 000', c: 'A', d: '3000st', e: '1-3000', f: '1.0%', g: '1.0%' },
        { a: 'Företag X', b: '20 000', c: 'A', d: '3000st', e: '1-3000', f: '1.0%', g: '1.0%' },
        { a: 'Företag X', b: '20 000', c: 'A', d: '3000st', e: '1-3000', f: '1.0%', g: '1.0%' },
        { a: 'Företag X', b: '20 000', c: 'A', d: '3000st', e: '1-3000', f: '1.0%', g: '1.0%' },
        { a: 'Företag X', b: '20 000', c: 'A', d: '3000st', e: '1-3000', f: '1.0%', g: '1.0%' },
    ]

    return (
        <Content title='Min Portfölj' lastUpdate='2020-02-26'>
            <ContentItem>
                <StockTable rows={stockTableData} />
            </ContentItem>
        </Content>
    )
}
export default PortFolio;