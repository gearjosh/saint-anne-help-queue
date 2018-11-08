import React from 'react';
import TicketList from './TicketList';
import Header from './Header';
import Body from './Body';
import { Switch, Route } from 'react-router-dom';
import NewTicketForm from './NewTicketForm';

function App(){
  const appStyles = {
    background: 'linear-gradient(to right, skyblue, yellow, lime, maroon, springgreen, royalblue, maroon, hotpink, skyblue)',
    height: '100%',
    padding: '3rem'
  };
  return(
    <div style={appStyles}>
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketForm} />
      </Switch>
      <Body
        image="https://i.etsystatic.com/9945573/r/il/f9048d/743456781/il_570xN.743456781_k342.jpg"
        caption="May the sainted child bless your struggles, for they shall be neverending..."/>
    </div>
  );
}

export default App;
