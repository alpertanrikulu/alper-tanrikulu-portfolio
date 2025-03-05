import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wb9x0yg", "template_jqgybh9", form.current, {
        publicKey: "Si7VtRg39qqvDHEpE",
      })
      .then(
        () => {
          alert("Message sent successfully!");
          setEmail("");
          setMessage("");
          setName("");
          setSubject("");
        },
        (error) => {
          console.log("Message sending failed! Try again.");
        }
      );
  };

  return (
    <form
      className="h-full flex flex-col justify-around text-white mt-5 md:mt-0"
      ref={form}
      onSubmit={sendEmail}
    >
      <div className="h-full flex flex-col justify-around">
        <div className="mb-5 border-b-2 border-whitet text-md">
          <input
            type="text"
            className="focus:outline-none"
            id="username"
            name="username"
            aria-describedby="nameHelp"
            placeholder="Enter your name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-5 border-b-2 border-whitet">
          <input
            type="email"
            className="focus:outline-none"
            id="useremail"
            name="useremail"
            aria-describedby="emailHelp"
            placeholder="Enter your email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-5 border-b-2 border-whitet">
          <input
            type="text"
            className="focus:outline-none"
            id="usersubject"
            name="usersubject"
            placeholder="Enter the subject*"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="mb-5 border-b-2 border-whitet">
          <textarea
            className="w-full mb-0 focus:outline-none"
            id="usermessage"
            name="usermessage"
            rows={3}
            placeholder="Enter your message*"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="myButton1 !my-0"
        style={{ fontSize: "1.25rem" }}
      >
        Send Message
      </button>
    </form>
  );
}
