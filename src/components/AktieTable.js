import React from "react";
import AktieRow from './AktieRow'
import '../css/AktieTable.css'

function AktieTable({ rows }) {
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
            rows.map(row => <AktieRow info={row}></AktieRow>)
          }
        </tbody>
      </table>
    </div>
  );
}
export default AktieTable;
