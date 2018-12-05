import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import Body from './Body';
import Admin from './Admin';
import Error404 from './Error404';
import NewTicketControl from './NewTicketControl';
import { Switch, Route, withRouter } from 'react-router-dom';
import Moment from 'moment'; // eslint-disable-line
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import constants from './../constants';
const { c } = constants;
import * as actions from './../actions';

class App extends React.Component {

  componentWillMount() {
    const { dispatch } = this.props;
    const { watchFirebaseTicketsRef } = actions;
    dispatch(watchFirebaseTicketsRef());
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
    60000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTicketElapsedWaitTime() {
    const { dispatch } = this.props;
    Object.keys(this.props.masterTicketList).map(ticketId => {
      const ticket = this.props.masterTicketList[ticketId];
      const newFormattedWaitTime = new Moment(ticket.timeOpen).from(new Moment());
      const action = {
        type: c.UPDATE_TIME,
        id: ticketId,
        formattedWaitTime: newFormattedWaitTime
      };
      dispatch(action);
    });
  }

  render() {
    const appStyles = {
      background: 'linear-gradient(to right, skyblue, yellow, lime, maroon, springgreen, royalblue, maroon, hotpink, skyblue)',
      height: '100%',
      padding: '3rem'
    };
    return(
      <div style={appStyles}>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketList={this.props.masterTicketList} />} />
          <Route path='/newticket' render={()=><NewTicketControl/>} />
          <Route
            path='/admin'
            render={(props)=>
              <Admin ticketList={this.props.masterTicketList}
                currentRouterPath={props.location.pathname} />} />
          <Route component={Error404} />
        </Switch>
        <Body
          image='https://i.etsystatic.com/9945573/r/il/f9048d/743456781/il_570xN.743456781_k342.jpg'
          caption='May the sainted Anne bless your struggles, for they shall be never-ending...'/>
      </div>
    );
  }
}

App.propTypes = {
  masterTicketList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterTicketList: state.masterTicketList
  };
};

export default withRouter(connect(mapStateToProps)(App));
