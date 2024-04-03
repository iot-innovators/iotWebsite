import React from "react";
import "./Contact.css";
import { LuPhoneCall } from "react-icons/lu";
import { CiMail } from "react-icons/ci";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0a2ee655-9bcb-4047-b801-f5bae441d321");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thank you! Your email has been submitted. We'll try to reach out asap...");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <section className="contactSection">
      <div className="allItems">
        <p className="contactTitle">
          Contact Us
        </p>
        <form className="contactForm" onSubmit={onSubmit}>
        <input name="name" type="text" className="name" placeholder="Name"/>
        <input name="email" type="email" className="email" placeholder="Email" />
        <textarea name="message" className="msg" placeholder="Message"></textarea>
        {/* <input type="textarea" className="msg" placeholder="Message"/> */}
        <button className="contactSubmit" type="submit">Submit</button>
        </form>
        <span className="result">{result}</span>
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