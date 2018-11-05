import React from 'react';
import TicketList from './TicketList';
import Header from './Header';
import Body from './Body';

function App(){
  const appStyles = {
    background: 'linear-gradient(to right, skyblue, yellow, lime, maroon, springgreen, royalblue, maroon, hotpink, skyblue)',
    height: '100%',
    padding: '3rem'
  };
  return(
    <div style={appStyles}>
      <Header/>
      <TicketList/>
      <Body
        image="https://cdn.pixabay.com/photo/2016/06/18/17/42/image-1465348_960_720.jpg"
        caption="May the sainted child bless your struggles, for they shall be neverending..."/>
    </div>
  );
}

export default App;
