import React from 'react';
import Ticket from './Ticket';

const masterTicketList = [
  {
    names: 'Thato and Haley',
    location: '3A',
    issue: 'Firebase won\'t save record. Halp.'
  },
  {
    names: 'JPG and Eric MC',
    location: 'One, eh?',
    issue: 'Firebase done goofed my whole thing and I will not save record!'
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    issue: 'Donkey picture not displaying on hover in Zoology app. :('
  },
  {
    names: 'Dugan & Geraldine',
    location: '99F',
    issue: 'Donkey picture is the only picture on Google :-P'
  }
];


function TicketList(){
  return (
    <div>
      <hr/>
      {masterTicketList.map((ticket, index) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index}/>
      )}
    </div>
  );
}

export default TicketList;
