import React, { useRef } from 'react';
import emailjs from 'emailjs-com'; // Updated import for emailjs library
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import instagramIcon from '../../assets/instagram.png';
import linkedinIcon from '../../assets/linked-in.png';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9qbvd2e', 'template_mkr3g67', form.current, 'TAc9cQxyxXc8UKFgX')
            .then((result) => {
                console.log(result.text);
                form.current.reset(); // Resetting form fields
                alert('Email Sent!');
            }, (error) => {
                console.log(error.text);
                alert('Error Sending Email!');
            });
    };
    
    return (
        <div id='contactPage'>
            <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <span className="clientDesc">
                    I've had the privilege of engaging with a diverse array of companies. Some standout names I've collaborated with remotely include:
                </span>
                <div className="clientImgs">
                    <img src={Walmart} alt="Client" className="clientImg" />
                    <img src={Adobe} alt="Client" className="clientImg" />
                    <img src={Microsoft} alt="Client" className="clientImg" />
                    <img src={Facebook} alt="Client" className="clientImg" />                   
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name='from_name' required />
                    <input type="email" className="email" placeholder='Your Email' name='from_email' required />
                    <textarea name="message" placeholder='Your Message' rows={5} className='msg' required></textarea>
                    <button type="submit" className='submitBtn'>Submit</button>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/martin-wambugu-b75a3960/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="Linked-in" className="link" />
                        </a>
                        <a href="https://github.com/1Wambugu" target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt="Instagram" className="link" />
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
