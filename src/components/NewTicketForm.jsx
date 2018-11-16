import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function NewTicketForm(props){
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event){
    event.preventDefault();
    props.onNewTicketCreation({names: _names.value, location: _location.value, issue: _issue.value, timeOpen: new Moment()});
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }

  return(
    <div className="form-of-tickets">
      <style jsx>{`
        .form-of-tickets {
          background: linear-gradient(orangered, tomato, plum, fuchsia);
          border: 5px solid skyblue;
          padding: 1rem;
          border-radius: 50%;
          overflow: hidden;
          text-align: center;
          margin: 1rem;
          box-shadow: 0 0 8rem yellow;
        }
        input, textarea, button {
          color: purple;
          font-family: arial rounded mt bold;
          -webkit-text-stroke: 0.5px white;
          font-size: 2em;
          text-shadow: 2px 4px 4px #dda0dd;
          display: block;
          text-align: center;
          margin: 0.5rem auto;
          border-radius: 1rem;
        }
      `}</style>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='location'
          placeholder='Your Location'
          ref={(input) => {_location = input;}}/>
        <textarea
          rows="6"
          id='issue'
          placeholder='Describish That Ish-ish.'
          ref={(textarea) => {_issue = textarea;}}/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;
