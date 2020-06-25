import React from "react";

const StockRow = ({ info }) => {
  return (
    <tr>
      <td>{info.company}</td>
      <td>{info.value}</td>
      <td>{info.type}</td>
      <td>{info.amount}</td>
      <td>{info.nr}</td>
      <td>{info.ownership}</td>
      <td>{info.votingPower}</td>
    </tr>
  )
}

export default StockRow;