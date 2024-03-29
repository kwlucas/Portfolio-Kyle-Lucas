import React, { useState } from 'react';

export default function Contact() {
  const [entry, setEntry] = useState({
    Name: '',
    Email: '',
    Message: ''
  });

  function handleChange(event){
    const { placeholder, value } = event.target
    setEntry({...entry, [placeholder]: value});
    //console.log(entry);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setEntry({
      Name: '',
      Email: '',
      Message: ''
    })
    event.target.reset();
  }

  return (
    <main>
      <h2>Contact</h2>
      <h3>Note: The site is not hooked up to a back-end at the moment, meaning this form is non-functional. Please see my resume for contact info.</h3>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div>
            <label htmlFor='nameInput'>Name</label>
            <input id='nameInput' placeholder='Name' type='text' onChange={handleChange} required></input>
          </div>
          <div>
            <label htmlFor='emailInput'>Email</label>
            <input id='emailInput' placeholder='Email' type='email' title='Please enter a valid email address.' onChange={handleChange} required></input>
          </div>
        </fieldset>
        <fieldset>
          <textarea id='messageInput' placeholder='Message' onChange={handleChange} required></textarea>
        </fieldset>
        <div className='buttonGroup'>
          <button type='submit'>Send</button>
        </div>
      </form>
    </main>
  );
}
