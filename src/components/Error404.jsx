import React from 'react';
import { Link } from 'react-router-dom';

function Error404(props) {
  return(
    <div>
      <h1>Ya dun goofed the addy!  This page, "localhost:8080/#{props.location.pathname}" ain't no paaaaaage, maaaaaaaan...</h1>
      <h3>Would you like to go back to your <Link to="/">home</Link> instead today now?</h3>
    </div>
  );
}

export default Error404;
