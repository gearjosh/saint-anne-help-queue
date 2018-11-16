import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props) {
  return (
    <div>
      <style jsx>{`
        .questioner {
          background: linear-gradient(orangered, tomato, plum, fuchsia);
          border: 5px solid skyblue;
          padding: 1rem;
          border-radius: 50%;
          overflow: hidden;
          text-align: center;
          margin: 1rem;
          box-shadow: 0 0 8rem yellow;
        }
        p, button {
          color: purple;
          font-family: cursive;
          font-size: 2em;
          text-shadow: 2px 4px 4px #dda0dd;
        }
        button {
          padding: 1rem;
          border-radius: 1rem;
        }
      `}</style>
      <p>Have you gone through all them steps to make a thing a thing or what yet?</p>
      <button onClick={props.onTroubleshootingConfirmation}>Yup</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default ConfirmationQuestions;
