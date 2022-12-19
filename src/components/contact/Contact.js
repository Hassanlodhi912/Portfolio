import "./Contact.css"
import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const [done ,setDone] =useState(false);
 const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
 
    emailjs.sendForm('service_ikms1pr', 'template_xbeuzfr', form.current, 'tQ7IZrGBfLdiXrPGT')
      .then((result) => {
        console.log(result.text);
        setDone(true);

      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <div className="awesome">
          <span >Get in Touch</span>
          <span>Contact me</span>
          
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name="to_name" className="user" placeholder="Name" />
          <input type="email"  name="from_name" className="user" placeholder="Email" />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit"  className="button" />
         <span>{done && "Thank For Contacting Us"  }</span>
         
        </form>
      </div>
    </div>
  )
}

export default Contact
