import ticketListReducer from './../../src/reducers/ticket-list-reducer';

describe('ticketListReducer', () => {

  let action;
  const sampleTicketData = {
    names : 'Jimifer and Harringtonerellimansoningtonifer',
    location : '2b',
    issue : 'Did not pass the non-coma test!',
    timeOpen : 1500000000000000,
    id: 0
  };

  test('Should return default state if no action type is recognized', () => {
    expect(ticketListReducer({}, { type: null})).toEqual({});
  });

  test('Should successfully add new ticket data to masterTicketList', () => {
    const { names, location, issue, timeOpen, id } = sampleTicketData;
    action = {
      type: 'ADD_TICKET',
      names: names,
      location: location,
      issue: issue,
      timeOpen: timeOpen,
      id: id
    };
    expect(ticketListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id
      }
    });
  });
});
