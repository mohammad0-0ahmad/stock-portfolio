import React, { useState } from "react";
import StockRow from './StockRow'
import '../css/StockTable.css'
import PaginationBar from './PaginationBar'
import NumericSelectList from './NumericSelectList'

const StockTable = ({ rows }) => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(rows.length > 10 ? 10 : rows.length);
  const [firstShownRowIndex, setFirstShownRowIndex] = useState(rows ? 1 : 0);
  const amountPages = rows.length % rowsPerPage === 0 ? Math.floor(rows.length / rowsPerPage) : Math.floor(rows.length / rowsPerPage) + 1;

  const getRowsToShow = () => {
    let result = [];
    const lastShownRowIndex = firstShownRowIndex + rowsPerPage - 1 < rows.length ? firstShownRowIndex + rowsPerPage - 1 : rows.length;
    for (let i = firstShownRowIndex - 1; i < lastShownRowIndex; i++) {
      result.push(<StockRow key={i} info={rows[i]} />)
    }
    return result;
  }
  const handlePaginationBar = (selectedPage) => {
    setPage(selectedPage);
    setFirstShownRowIndex((selectedPage - 1) * rowsPerPage + 1);
  }
  const handleDropList = (firstSI, rowsPP) => {
    setFirstShownRowIndex(firstSI);
    setRowsPerPage(rowsPP);
  }

  return (
    <div className="StockTable">
      <table>
        <thead>
          <tr>
            <th>Företag</th>
            <th>Innehav</th>
            <th>Aktietyp</th>
            <th>Antal aktier</th>
            <th>Aktienummer</th>
            <th>Ägerandel</th>
            <th>Röstvärde</th>
          </tr>
        </thead>
        <tbody>
          {
            getRowsToShow()
          }
        </tbody>
      </table>
      <div>
        <PaginationBar
          amountPages={amountPages}
          selected={page}
          handleSelect={handlePaginationBar}
        />
        <NumericSelectList
          firstIndex={firstShownRowIndex}
          lastIndex={rows.length}
          selected={rowsPerPage}
          handleSelect={handleDropList}
        />
      </div>
    </div>
  );
}
export default StockTable;
