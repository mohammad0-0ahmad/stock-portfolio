import React from "react";
import StockRow from './StockRow'
import '../css/StockTable.css'

const StockTable = ({ rows }) => {
  return (
    <div className="Table-Row">
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
            rows.map(row => <StockRow info={row}></StockRow>)
          }
        </tbody>
      </table>
    </div>
  );
}
export default StockTable;
