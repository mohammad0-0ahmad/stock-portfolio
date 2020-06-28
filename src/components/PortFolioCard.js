import React, { useState, useEffect } from 'react'
import '../css/PortFolioCard.css'
import Content from './Content'
import ContentItem from './ContentItem'
import StockTable from './StockTable'
import PaginationBar from './PaginationBar'
import NumericSelectList from './NumericSelectList'
import { fetchJSON } from '../utilities/fetchData'

const PortFolioCard = () => {
    const [stocks, setStocks] = useState([])
    const [lastUpdate, setLastUpdate] = useState('')
    const [page, setPage] = useState(1);
    const [firstShownStockIndex, setFirstShownStockIndex] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(0);
    const amountPages = stocks.length % rowsPerPage === 0 ? Math.floor(stocks.length / rowsPerPage) : Math.floor(stocks.length / rowsPerPage) + 1;

    useEffect(() => {
        document.title = 'Min Portfölj';

        fetchJSON('/stocks', null, (data) => {
            if (data) {
                setStocks(data)
            }
        });

        fetchJSON('/userinfo', null, (data) => {
            if (data.l_update) {
                setLastUpdate(data.l_update)
            }
        });

    }, [])

    useEffect(() => {
        const rowsPerPage = stocks.length > 10 ? 10 : stocks.length;
        setRowsPerPage(rowsPerPage);
    }, [stocks])

    const handlePaginationBar = (selectedPage) => {
        setPage(selectedPage);
        setFirstShownStockIndex((selectedPage - 1) * rowsPerPage + 1);
    }
    const handleDropList = (rowsPP) => {
        setFirstShownStockIndex(stocks ? 1 : 0);
        setRowsPerPage(rowsPP);
        setPage(1);
    }

    const stocksToShow = () => {
        const lastShownRowIndex = firstShownStockIndex + rowsPerPage - 1 < stocks.length ? firstShownStockIndex + rowsPerPage - 1 : stocks.length;
        return stocks.filter((stock, i) => i >= firstShownStockIndex - 1 && i < lastShownRowIndex);
    }

    return (
        <Content title='Min Portfölj' lastUpdate={lastUpdate}>
            <ContentItem>
                <StockTable rows={stocksToShow()} />
                {stocks.length > 0 &&
                    <div id='control-bar'>
                        <PaginationBar
                            amountPages={amountPages}
                            selected={page}
                            handleSelect={handlePaginationBar}
                        />
                        <NumericSelectList
                            firstIndex={firstShownStockIndex}
                            lastIndex={stocks.length}
                            selected={rowsPerPage}
                            handleSelect={handleDropList}
                        />
                    </div>
                }
            </ContentItem>
        </Content>
    )
}

export default PortFolioCard;