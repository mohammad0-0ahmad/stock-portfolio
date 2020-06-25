import React, { useEffect, useState } from "react";
import "../css/PreferedIndustries.css";
import { fetchJSON } from "../utilities/fetchData";

const PreferedIndustries = () => {
  const [userIndustries, setUserIndustries] = useState([]);

  useEffect(() => {
    fetchJSON("/industries", { session: localStorage.sessionId }, (data) => {
      if (data) {
        setUserIndustries(data.filter((industry) => industry.preferred));
      }
    });
  }, []);

  const showUserIndustries = () => {
    const result = userIndustries.filter((industry) => industry.preferred);
    return result.map((industry, i) => <p key={i}>{industry.name}</p>);
  };

  return (
    <div className="PreferedIndustries">
      <p>Föredragna Industrier</p>
      <div>
        {userIndustries.length
          ? showUserIndustries()
          : "Inga industrier valda än"}
      </div>
    </div>
  );
};

export default PreferedIndustries;