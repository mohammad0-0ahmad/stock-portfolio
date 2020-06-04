import React from "react";

function AktieRow({ info }) {
  return (
    <tr className='AktieRow'>
      <td>{info.a}</td>
      <td>{info.b}</td>
      <td>{info.c}</td>
      <td>{info.d}</td>
      <td>{info.e}</td>
      <td>{info.f}</td>
      <td>{info.g}</td>
    </tr>
  )
}
export default AktieRow;
