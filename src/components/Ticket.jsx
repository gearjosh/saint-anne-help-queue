import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import constants from './../constants';
const { c } = constants;


function Ticket(props){

  function handleSavingSelectedTicket(ticketId){
    const { dispatch } = props;
    const action = {
      type: c.SELECT_TICKET,
      ticketId: ticketId
    };
    dispatch(action);
  }

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
      <h2>{props.formattedWaitTime} now based on today's time for me now</h2>

    </div>;

  if (props.currentRouterPath === '/admin') {
    return (
      <div onClick={() => {handleSavingSelectedTicket(props.ticketId);}}>
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
  ticketId: PropTypes.string.isRequired
};

export default connect()(Ticket);
