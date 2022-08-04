import React from "react";
import "./Email.css";
import Header from "../components/header/Header";
import Form from 'react-bootstrap/Form';
import email from "../assets/icons/email.svg"
import emailjs from "emailjs-com";


export default function sendEmail() {

  function emailForm(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_ojr6raf', '1LiWNeZxr_ik0RZ-h')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset()
  }
  return (

    <>
      <Header />
      <div className="Welcome">
        <h1>Don't forget a thing</h1>
        <p className="email-subheader"><br></br>Fill in your email address and we will send you a copy of your <br></br> packing list so you can relax and enjoy your trip.</p>
      </div>

      <div className="email-form">
        <Form onSubmit={emailForm} id="email-form">
          <div className="email-icon">
            <img className="email-icon-position" src={email} alt="icon" />
          </div>
          <Form.Control className="email-placeholder" type="email" placeholder="Enter email" />
          <div>
            <button id="email-button" >
              Send
            </button>
          </div>
        </Form>
      </div>


    </>
  );
}
