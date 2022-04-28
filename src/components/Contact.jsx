import { React, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState([]);
  const [message, setMessage] = useState("");

  const submit = () => {
    axios
      .post("/api/contact", {
        name: name,
        last_name: last_name,
        email: email,
        phone: phone,
        message: message,
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
    <div id="Contact" >
        <h1 style={{marginTop:"1rem", color:"transparent"}}>About</h1>
      </div>
      <main  className="contactPage">
        <form method="POST" className="form-wrapper" action="/contact">
          <div className="contact-details">
            <h2 className="contact-h2">Contact</h2>
            <input
              name="first name"
              placeholder=" First Name"
              pattern="[A-Za-z]*"
              className="field"
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
            <input
              name="last name"
              placeholder="Last Name"
              pattern="[A-Za-z]*"
              className="field"
              onChange={(e) => {
                setLast_Name(e.target.value);
              }}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="field"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              className="field"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              className="textAreaInfo"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              required
            />
            <button onClick={submit} type="submit" className="contact-button">
              <span className="send">Send</span>
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Contact;
