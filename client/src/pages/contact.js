import React from 'react';

export default function Contact() {

  return (
    <main>
      <h2>Contact</h2>
      <form>
        <fieldset>
          <div>
            <label htmlFor='nameInput'>Name</label>
            <input id='nameInput' placeholder='Name' type='text' required></input>
          </div>
          <div>
            <label htmlFor='emailInput'>Email</label>
            <input id='emailInput' placeholder='Email' type='email' required></input>
          </div>
        </fieldset>
        <fieldset>
          <textarea id='messageInput' placeholder='Message' required></textarea>
        </fieldset>
        <button type='submit'>Send</button>
      </form>
    </main>
  );
}
