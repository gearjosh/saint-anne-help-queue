import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Body from './Body';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';


class App extends React.Component {

  // function App(){
  //   const appStyles = {
  //     background: 'linear-gradient(to right, skyblue, yellow, lime, maroon, springgreen, royalblue, maroon, hotpink, skyblue)',
  //     height: '100%',
  //     padding: '3rem'
  //   };
  // }

  constructor(props) {
  super(props);
  this.state = {
    masterTicketList: []
  };
  this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
}

handleAddingNewTicketToList(newTicket){
  let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
}

  render(){
    return(
      /*below appStyles to be commented in when styling returns*/
      <div /*style={appStyles}*/>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
          <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
          <Route component={Error404} />
        </Switch>
        <Body
          image="https://i.etsystatic.com/9945573/r/il/f9048d/743456781/il_570xN.743456781_k342.jpg"
          caption="May the sainted child bless your struggles, for they shall be neverending..."/>
      </div>
    );

  }
}

export default App;
