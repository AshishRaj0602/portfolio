import React from 'react'
import './contact.css'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'
import {MdEmail} from 'react-icons/md'
import {FaWhatsapp} from 'react-icons/fa'
const Contact = () => {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5l2ml3t', 'template_aghkp7h', form.current, 'lAflko0Sp1jRD190K')
      .then((result) => {
          alert("successfully send");
      }, (error) => {
        alert(error.text,"Error");
      });
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className='contact__options'>

          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>rajpootashish0602@gmail.com</h5>
            <a href="mailto:rajpootashish0602@gmail.com" target="__blank">Send a message</a>
          </article>
          

          <article className="contact__option">
            <FaWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>8175924593</h5>
            <a href="https://wa.me/+918175924593" target="_blank">Send a message</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail} autocomplete="off">
          <input type="text" name='name' placeholder='Your full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="mesaage" rows="7" placeholder='Your Message'/>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
