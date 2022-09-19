import React from "react";
import PropTypes from 'prop-types';

export const Cardnumber = (props) =>{
    return (
        <div className="card">
            <div className="card-body">
                <h4>{props.unit}</h4>
            </div>
        </div>
    )
}

Cardnumber.propTypes = {
    seconds: PropTypes.number,
}