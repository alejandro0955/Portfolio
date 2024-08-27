import "./ContactForm.css";

function ContactForm() {
  return (
    <>
      <div className="contact-form">
        <input className="email-form" placeholder="Email" type="text"></input>
        <input
          className="message-form"
          placeholder="Message"
          type="text"
        ></input>
        <div className="send-button-container">
          <button className="send-button">Send</button>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
