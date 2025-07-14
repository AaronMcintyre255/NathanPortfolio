import React from "react";
import "./contact.css";

const Contact: React.FC = () => {
  return (
    <>
      <div id="contact-main-section">
        <label>
          Firstname:{" "}
          <input
            placeholder="Surname"
            name="firstNameInput"
            id="first-name-input-box"
            className="contact-page-input-area"
          />
        </label>
        <label>
          Surname:{" "}
          <input
            placeholder="Surname"
            name="surnameInput"
            id="surname-input-box"
            className="contact-page-input-area"
          />
        </label>
        <label>
          Email:{" "}
          <input
            placeholder="Email Address"
            name="emailInput"
            id="email-input-box"
            className="contact-page-input-area"
          />
        </label>
        <label>
          Email Title:{" "}
          <input
            placeholder="Email Title"
            name="titleInput"
            id="title-input-box"
            className="contact-page-input-area"
          />
        </label>
        <label>
          Email Content:{" "}
          <textarea
            placeholder="Email Content"
            name="contentInput"
            id="content-input-box"
            className="contact-page-text-area"
          />
        </label>
      </div>
    </>
  );
};

export default Contact;
