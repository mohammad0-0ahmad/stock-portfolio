import React from "react";
import '../css/CurrentUpdate.css'

const CurrentUpdate = ({ value, date, currency }) => {
    return (
        <div className='CurrentUpdate'>
            <h1>{value} {currency}</h1>
            {parseInt(value) !== 0 &&
                <p>Uppdaterat {date}</p>
            }
        </div>
    );
};

export default CurrentUpdate;