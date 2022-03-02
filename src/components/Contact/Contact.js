// @flow strict
import React, { useState } from "react";
import "./Contact.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [firstname, setFirstname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form
      className={"form__module"}
      name="contact"
      encType="multipart/form-data"
    >
      <h1 className={"form__title"}>A question ? Contact us.</h1>
      <div className={"form__inner__grid"}>
        <div className={"form__inner__grid__element"}>
          <label className={"form__inner__grid__element__child"}>
            firstname
            <span className={"form__inner__star"}> *</span>
          </label>
          <input
            type="name"
            className={"form__inner__grid__element__child"}
            name="name"
            placeholder="Your firstname..."
            required
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className={"form__inner__grid__element"}>
          <label className={"form__inner__grid__element__child"}>
            Name <span className={"form__inner__star"}> *</span>
          </label>
          <input
            type="name"
            className={"form__inner__grid__element__child"}
            name="firstname"
            placeholder="Your name..."
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={"form__inner__grid__element"}>
          <label className={"form__inner__grid__element__child"}>Phone</label>
          <input
            type="text"
            className={"form__inner__grid__element__child"}
            name="phone"
            placeholder="ex : 06 32 32 32 32"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className={"form__inner__grid__element"}>
          <label className={"form__inner__grid__element__child"}>
            E-mail <span className={"form__inner__star"}> *</span>
          </label>
          <label className={"form__not-email"}>Unvalid email</label>
          <input
            type="mail"
            className={"form__inner__grid__element__child"}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email *"
            value={email}
            required
          />
        </div>
      </div>
      <div className={"form__inner__grid__element__message"}>
        <label className={"form__inner__grid__element__child"}>Message</label>
        <textarea
          className={"form__inner__grid__element__child"}
          name="message"
          placeholder="Your message..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
      </div>
      <div className={"form__inner__grid__element__terms"}></div>
      <div className={"form__inner__grid__element__message"}>
        <input
          className={"form__input"}
          name="submit"
          type="submit"
          value="Envoyer"
        />
        <div className={"form__message"}></div>
      </div>
    </form>
  );
};

export default ContactForm;
