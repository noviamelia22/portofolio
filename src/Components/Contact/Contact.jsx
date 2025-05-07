import React, { useRef } from 'react';
import './Contact.css';
import contact_logo from '../../assets/logo2.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const onSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'novi_gmail',
            'template_zo20ip8',
            form.current,
            'vkz5FEpfmQrwN30S8'
        ).then(
            (result) => {
                alert('Message sent!');
                form.current.reset(); // reset form
            },
            (error) => {
                alert('Failed to send. Please try again.');
                console.log(error.text);
            }
        );
    };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get In touch</h1>
                <img src={contact_logo} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>Let’s collaborate and make something great. I’m open to exciting opportunities!</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <i className="fas fa-envelope"></i>
                            <p>ameliakristantinovi@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <i className="fas fa-phone"></i>
                            <p>+62 858 5462 4583</p>
                        </div>
                        <div className="contact-detail">
                            <i className="fas fa-map-marker-alt"></i>
                            <p>Kediri, Jawa</p>
                        </div>
                        <div className="contact-detail">
                            <i className="fab fa-github"></i>
                            <p>
                                <a
                                    href="https://github.com/noviamelia22"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="contact-link"
                                >
                                    noviamelia22
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <form ref={form} onSubmit={onSubmit} className="contact-right">
                    <label>Your name</label>
                    <input type="text" placeholder='Enter your name' name='user_name' required />
                    <label>Your email</label>
                    <input type="email" placeholder='Enter your email' name='user_email' required />
                    <label>Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
                    <button type='submit' className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
