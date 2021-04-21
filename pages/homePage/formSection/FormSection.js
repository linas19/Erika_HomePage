import styles from "./FormSection.module.scss";
import Image from "next/image.js";
import React from "react";
import { useState } from "react";

export default function FormSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const bottomRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      name,
      email,
      message,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setBody("");
      }
    });
  };
  return (
    <div className={styles.formSection} ref={bottomRef}>
      <div className={styles.formSectionLeft}>
        <div className={styles.formSectionLeftText}>
          Let’s get your idea from notepad to launchpad
        </div>
        <div className={styles.formSectionLeftImage}>
          <Image src="/launch.png" width={787.21} height={571} alt="Image2" />
        </div>
      </div>
      <form className={styles.formSectionRight}>
        <input
          className={styles.formSectionRightTopBox}
          type="text"
          placeholder="What should I call you?"
          onChange={(e) => {
            setName(e.target.value);
          }}
          name="name"
        />
        <input
          className={styles.formSectionRightTopBox}
          type="text"
          placeholder="What’s your email?"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          name="email"
        />
        <textarea
          className={styles.formSectionRightBottomBox}
          type="text"
          placeholder="Let me know about the awesome product you have - what is it about? What type help are you looking for?"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          name="message"
        />
        <input
          className={styles.submit}
          type="submit"
          value="Send"
          onClick={(e) => {
            handleSubmit(e);
          }}
        />
      </form>
    </div>
  );
}
