import React from 'react';
import PropTypes from 'prop-types';

function TicketDetail(props){
  return (
    <div className="ticket-detailer">
      <style jsx>{`
        .ticket-detailer {
          background: linear-gradient(orangered, tomato, plum, fuchsia);
          border: 5px solid skyblue;
          padding: 1rem;
          border-radius: 50%;
          overflow: hidden;
          text-align: center;
          margin: 1rem;
          box-shadow: 0 0 8rem yellow;
        }
        h1, h2, h4 {
          color: purple;
        }
        h1 {
          font-family: arial rounded mt bold;
          -webkit-text-stroke: 0.5px white;
          font-size: 3rem;
        }
        h2, h4 {
          font-family: cursive;
          font-size: 2em;
          text-shadow: 2px 4px 4px #dda0dd;
        }
      `}</style>
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
