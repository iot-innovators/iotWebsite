import React from "react";
import "./Contact.css";
import { LuPhoneCall } from "react-icons/lu";
import { CiMail } from "react-icons/ci";

function Contact() {
  return (
    <section className="contactSection">
      <div className="allItems">
        <p className="contactTitle">
          Contact Us
        </p>
        <input type="text" className="name" placeholder="Name"/>
        <input type="email" className="email" placeholder="Email" />
        <textarea name="message" className="msg" placeholder="Message"></textarea>
        {/* <input type="textarea" className="msg" placeholder="Message"/> */}
        <button className="contactSubmit">Submit</button>
        <p className="or">or</p>
        <div className="contactDetails">
          <div className="iotNumber">
            <LuPhoneCall className="phoneIcon" />
            9824420893
          </div>
          <div className="iotEmail">
            <CiMail className="mailIcon" />
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlFCnhfwdVNfkFhXWKPLkKFxcJNCfSlLNvNGdwbKFBVBkvZMNJlKJkrfxbCvwZgLfjkFVq" target="_blank">

            iotinnovators@heraldcollege.edu.np
            </a>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Contact;