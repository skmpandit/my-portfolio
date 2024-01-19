import React, { useState } from 'react'
import './Footer.scss'
import { images } from '../../constants/index'
import { MotionWrap, WrapApp } from '../../wrapper/index'
import { client } from '../../client'

const Footer = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {name, email, message} = formData;

  const handleChangeInput = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = () => {
    setLoading(true);
    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    }
    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    })
  }

  return (
    <>
      <h2 className='head-text'>Take a coffe & chat with me</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href="mailto:sk3001057@gmail.com" className='p-text'>sk3001057@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +91 9771948798" className='p-text'>+91 9771948798</a>
        </div>
      </div>
      {!isFormSubmitted ? 
        <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input type="text" className='p-text' placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} />
        </div>
        <div className='app__flex'> 
          <input type="text" className='p-text' placeholder='Your Email' name='email' value={email} onChange={handleChangeInput}/>
        </div>
        <div>
          <textarea name='message' className="p-text" placeholder="Your Message" value={message} onChange={handleChangeInput}></textarea>
        </div>
        <button className='p-text' type='button' onClick={handleSubmit}>{loading ? 'Sending': 'Send Message'}</button>
      </div> 
      : <div>
        <h3 className='head-text'>Thank your for getting in touch!</h3>
      </div>
      }
    </>
  )
}

export default WrapApp(
  MotionWrap(Footer,'app__footer'), 'contact', 'app__whitebg'
)
