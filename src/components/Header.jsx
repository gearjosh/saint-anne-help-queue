import React from 'react';

function Header(){
  const headerStyles = {
    fontFamily: 'fantasy',
    color: 'tomato',
    background: 'linear-gradient(to right, teal, purple, orange, purple, teal)',
    textAlign: 'center',
    textShadow: '4px 62px 3px indigo',
    border: '40px dotted white',
    borderRadius: '50%'
  };
  return (
    <h1 style={headerStyles}>Help Queueueueueue</h1>
  );
}

export default Header;
