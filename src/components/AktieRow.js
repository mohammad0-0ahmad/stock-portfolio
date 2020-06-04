import React from "react";

function AktieRow({color,info}) {
  return (
        <tr>
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
