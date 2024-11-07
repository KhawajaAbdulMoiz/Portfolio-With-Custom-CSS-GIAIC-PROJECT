import React from 'react'
import './style.css';

function Contact() {
  return (
    <div className='cont' id='contact'>
      <h1 className='skls'>Contact</h1>
      <form action="https://api.web3forms.com/submit" method="POST" className="form" data-form>
      <input type="hidden" name="access_key" value="75feb0f8-0081-465a-bef2-b332a86db2ab"></input>
      <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input></input>
      <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input></input>
      <div>
      <textarea name="message" className="form-input" id='form' placeholder="Your Message" required data-form-input></textarea>
      </div>

      <button className='button' id='cb'>Submit</button>
      </form>
    </div>
    
  )
}

export default Contact
