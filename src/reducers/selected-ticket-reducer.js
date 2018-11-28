export default (state = {}, action) => {
  switch (action.type) {
    case 'SELECTED_TICKET':
      return action.ticketId;
    default:
    return state;
  }
};
