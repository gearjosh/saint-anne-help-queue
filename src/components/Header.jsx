import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  const headerStyles = {
    fontFamily: 'fantasy',
    color: 'tomato',
    background: 'linear-gradient(to right, teal, purple, orange, purple, teal)',
    textAlign: 'center',
    textShadow: '0 2px 3px indigo',
    border: '4px dotted white',
    borderRadius: '1rem'
  };
  return (
    <div>
      <style jsx>{`
          ul {
            text-align: center;
          }
          li {
            font-family: comic sans MS;
            border: 5px solid aqua;
            border-radius: 3rem;
            padding: 0.5rem;
            text-shadow: 1px 2px 2px wheat;
            display: inline;
            background-color: rgba(205, 48, 232, .35)
          }
          div {
            margin-bottom: 1.5rem;
          }
          .spanner {
            font-size: 4rem;
            color: tomato;
            transform: translateY(1rem);
            display: inline-block;
            margin: 0 1rem;
          }
      `}</style>
      <h1 style={headerStyles}>Help Queueueueueue</h1>
      <ul>
        <Link to="/" replace>
          <li>Home</li>
        </Link>
        <span className="spanner"> | </span>
        <Link to="/newticket" replace>
          <li>Create Ticket</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
