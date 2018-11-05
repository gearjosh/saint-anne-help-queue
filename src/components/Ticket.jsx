import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  const ticketStyles = {
    background: 'linear-gradient(lightseagreen, aqua, gold, dodgerblue)',
    color: 'fuchsia',
    fontFamily: 'comic sans MS',
    border: '5px solid orange',
    borderRadius: '1rem',
    padding: '1rem'
  };
  return (
    <div style={ticketStyles}>
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
