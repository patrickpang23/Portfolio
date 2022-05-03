import  React from "react";
import emailjs from "emailjs-com";

const Contact = () => {

  function sendEmail (e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_olmti71', e.target, '0d53nrjvrcmeK25t5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <>
    <div id="Contact" >
        <h1 style={{marginTop:"1rem", color:"transparent"}}></h1>
      </div>
      <main  className="contactPage">
        <form onSubmit={sendEmail} method="POST" className="form-wrapper" action="/contact">
          <div className="contact-details">
            <h2 className="contact-h2">Contact</h2>
            <input
            name="subject"
            placeholder="Subject"
            pattern="[A-Za-z]*"
            className="field"
            required
            ></input>
            <input
              name="first name"
              placeholder=" First Name"
              pattern="[A-Za-z]*"
              className="field"
              required
            />
            <input
              name="last name"
              placeholder="Last Name"
              pattern="[A-Za-z]*"
              className="field"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="field"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              className="field"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              className="textAreaInfo"
              required
            />
            <button className="contact-button">
              <input type="submit" className="send" value="Send"></input>
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Contact;
