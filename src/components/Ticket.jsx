import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){

  const ticketInformation =
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

    </div>;

  if (props.currentRouterPath === '/admin') {
    return (
      <div onClick={() => {props.onTicketSelection({names: props.names, location: props.location, issue: props.issue, formattedWaitTime: props.formattedWaitTime});}}>
        {ticketInformation}
      </div>
    );
  } else {
    return(
      <div>
        {ticketInformation}
      </div>
    );
  }

}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
};

export default Ticket;
