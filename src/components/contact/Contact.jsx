import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessageLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'


function Contact() {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
            <article className='contact_option'> 
            <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>qwerty@gmail.com</h5>
              <a href='meilto:qwerty@gmail.com'>Send a message</a>
            </article>

            <article className='contact_option'> 
            <RiMessageLine className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>egatortutorials</h5>
              <a href='meilto:qwerty@gmail.com'>Send a message</a>
            </article>

            <article className='contact_option'> 
            <BsWhatsapp className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>+123123123</h5>
              <a href='#'>Send a message</a>
            </article>
        </div>
        <form action="">
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your email' required />
            <textarea name="message" id="" placeholder='Your message' required ></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>


    </section>
  )
}

export default Contact