import React from 'react';

function NewTicketForm(){
  return(
    <div>
      <form>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'/>
        <input
          type='text'
          id='location'
          placeholder='Your Location'/>
        <textarea
          id='issue'
          placeholder='Describish That Ish-ish.'/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewTicketForm;
