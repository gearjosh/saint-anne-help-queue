import React from 'react';
import PropTypes from 'prop-types';

function TicketDetail(props){
  return (
    <div>
      <hr/>
      <h1>{props.selectedTicket.names} - {props.selectedTicket.location}</h1>
      <h2>Submitted {props.selectedTicket.formattedWaitTime} ago</h2>
      <h4><em>{props.selectedTicket.issue}</em></h4>
      <hr/>
    </div>
  );
}

TicketDetail.propTypes = {
  selectedTicket: PropTypes.object
};

export default TicketDetail;
