import React, { useState } from "react";
import "./Contact.css";

const Contact = ({ id }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section className="section_sixth" id={id}>
      <div className="container_sixth">
        <div className="sixth_head">
          <h3 className="sixth_text">Get In Touch</h3>
          <p className="sixth_para">
            Condimentum auctor ante sed interdum proin viverra sed lectus et
            iaculis maecenas tortor lorem bibendum pretium.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form_container">
            <div style={{ width: "30%", paddingRight: "3rem" }}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name..."
                required
                className="input_boxContainer"
              />
            </div>
            <div style={{ width: "30%", paddingRight: "3rem" }}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email..."
                required
                className="input_boxContainer"
              />
            </div>
            <div style={{ width: "30%" }}>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Your Subject.."
                required
                className="input_boxContainer"
              />
            </div>
          </div>
          <div className="message_box">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message..."
              required
              className="input_boxContainer"
            ></textarea>
          </div>
          <button type="submit" className="sendMessage_text">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
