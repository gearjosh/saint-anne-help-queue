import React from 'react';
import PropTypes from 'prop-types';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';

function Admin(props){
  let optionalSelectedTicketContent = null;
  if (props.selectedTicket != null) {
    optionalSelectedTicketContent = <TicketDetail selectedTicket={props.ticketList[props.selectedTicket]}/>;
  }
  return (
    <div>
      <style jsx>{`
          h2 {
            font-family: arial rounded mt bold;
            font-size: 4rem;
            background: linear-gradient(to right, pink, hotpink, fuchsia, orangered, tomato, purple, indigo, royalblue, dodgerblue, teal, turquoise, aqua, seagreen, forestgreen, lime, springgreen, yellow, wheat, peachpuff);
            padding: 1rem;
            border: 1rem dotted #dda0dd;
            border-radius: 4rem;
            outline: 1.5rem dotted gold;
            margin: 3rem;
            text-align: right;
            letter-spacing: 7rem;
            color: white;
            text-shadow: 0 4px 0 #aaa;
          }
          `}</style>
      <h2>Admin</h2>
      {optionalSelectedTicketContent}
      <TicketList
        ticketList={props.ticketList}
        currentRouterPath={props.currentRouterPath}
        onTicketSelection={props.onTicketSelection} />
    </div>
  );
}

Admin.propTypes = {
  ticketList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  onTicketSelection: PropTypes.func.isRequired,
  selectedTicket: PropTypes.string
};

export default Admin;
