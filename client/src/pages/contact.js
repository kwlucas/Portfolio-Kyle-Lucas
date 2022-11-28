import React from 'react';

export default function Contact() {

  return (
    <main>
      <h2>Contact</h2>
      <form>
        <fieldset>
          <input id='nameInput' placeholder='Name'></input>
          <input id='emailInput' placeholder='Email'></input>
        </fieldset>
        <textarea id='messageInput' placeholder='Message'></textarea>
      </form>
    </main>
  );
}
