import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){

  return (
    <div>
      <style jsx>{`
        div {
          background: linear-gradient(lightseagreen, aqua, gold, dodgerblue);
          color: fuchsia;
          font-family: comic sans MS;
          border: 5px solid orange;
          border-radius: 1rem;
          padding: 1rem;
        }
        div:hover {
          transform: scale(1.05);
        }
      `}</style>
      <h3>{props.location} - {props.names}</h3>
      <hr/>
      <hr/>
      <h2>{props.formattedWaitTime} ago now today time</h2>
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
  issue: PropTypes.string.isRequired,
  formattedWaitTime: PropTypes.string.isRequired
};

export default Ticket;
