import selectedTicketReducer from './../../src/reducers/selected-ticket-reducer';

describe("selectedTicketReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(selectedTicketReducer({}, { type: null})).toEqual({})
  });

  test('Should record which ticket has been selected by user', () => {
    expect(selectedTicketReducer({}, { type: 'SELECTED_TICKET', ticketId: 1})).toEqual(1);
  });
});
