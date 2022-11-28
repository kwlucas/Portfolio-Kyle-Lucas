import React from 'react';

export default function Contact() {

  return (
    <main>
      <h2>Contact</h2>
      <form>
        <fieldset>
          <div>
            <label htmlFor='nameInput'>Name</label>
            <input id='nameInput' placeholder='Name' type='text'></input>
          </div>
          <div>
            <label htmlFor='emailInput'>Email</label>
            <input id='emailInput' placeholder='Email' type='email'></input>
          </div>
        </fieldset>
        <fieldset>
          <textarea id='messageInput' placeholder='Message'></textarea>
        </fieldset>
      </form>
    </main>
  );
}
