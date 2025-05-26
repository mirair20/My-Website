import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../pages/pages.css';

export const ContactUs = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jauoxqd', 'template_qebzyr4', form.current, {
        publicKey: 'mXJhoZfyToBUsENij',
      })
      .then(
        () => {
          setSuccessMessage('Message sent successfully!');
          setErrorMessage('');
          form.current.reset(); // Clear form after success
        },
        (error) => {
          setErrorMessage('Failed to send message. Please try again.');
          setSuccessMessage('');
          console.error('FAILED...', error.text);
        }
      );
  };

  return (
    <>
      <form className='contact-form' ref={form} onSubmit={sendEmail}>
        <input placeholder='Name' required name="name" />
        <input placeholder='Email' required name="email" />
        <textarea placeholder='Message' required name="message" />
        <input type="submit" value="Send" />
      </form>

      {/* Simple Success/Error Message */}
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </>
  );
};
