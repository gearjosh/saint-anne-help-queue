import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import Body from './Body';
import Admin from './Admin';
import Error404 from './Error404';
import NewTicketControl from './NewTicketControl';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment'; // eslint-disable-line

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: [],
      selectedTicket: null
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
  }

  componentDidMount() {
    // console.log('componentDidMount');
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
    60000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTicketElapsedWaitTime() {
    // console.log('check');
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.forEach((ticket) =>
      ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true)
    );
    this.setState({masterTicketList: newMasterTicketList});
  }

  handleAddingNewTicketToList(newTicket) {
    let newMasterTicketList = this.state.masterTicketList.slice();
    newTicket.formattedWaitTime = (newTicket.timeOpen).fromNow(true);
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }

  handleChangingSelectedTicket(ticket){
    // alert('the selected ticket is currently ' + this.state.selectedTicket.names + '\'s ticket');
    this.setState({selectedTicket: ticket});
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
          <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
          <Route path='/newticket'
            render={()=>
              <NewTicketControl
                onNewTicketCreation={this.handleAddingNewTicketToList} />}  />
          <Route
            path='/admin'
            render={(props)=>
              <Admin ticketList={this.state.masterTicketList}
                currentRouterPath={props.location.pathname} onTicketSelection={this.handleChangingSelectedTicket}
                selectedTicket={this.state.selectedTicket}/>} />
          <Route component={Error404} />
        </Switch>
        <Body
          image='https://i.etsystatic.com/9945573/r/il/f9048d/743456781/il_570xN.743456781_k342.jpg'
          caption='May the sainted Anne bless your struggles, for they shall be never-ending...'/>
      </div>
    );
  }
}

export default App;
