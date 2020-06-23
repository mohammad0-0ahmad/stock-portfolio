import React from "react";
import StockRow from './StockRow'
import '../css/StockTable.css'
import MessageCard from './MessageCard'

const StockTable = ({ rows }) => {

  const renderRows = () => {
    return rows.map((row, i) => <StockRow key={i} info={row} />);
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
            renderRows()
          }
        </tbody>
      </table>
      {
        !rows.length &&
        <div id='emptyTableMessage'>
          <MessageCard text='Inget innehav tillagt ännu' />
        </div>
      }
    </div>
  );
}
export default StockTable;
