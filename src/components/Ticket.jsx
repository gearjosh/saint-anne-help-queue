import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  return (
    <div>
      <h3>{props.location} - {props.names}</h3>
      <hr/>
      <hr/>
      <h2><em>{props.issue}</em></h2>
      <hr/>
      <hr/>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string.isRequired
};

export default Ticket;
