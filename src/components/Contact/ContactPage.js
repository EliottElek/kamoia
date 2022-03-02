import React from "react";
import HeroMini from "../Hero/HeroMini";
import ContactForm from "./Contact";
const ContactPage = () => {
  return (
    <div>
      <HeroMini title={"Contact"} />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
