import React, { useState } from "react";
import axios from "axios";
import "./contact.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [subject, setSubject] = useState("");
  let [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      userName: name,
      emailAddress: email,
      userSubject: subject,
      userMessage: message,
    };
    console.log("Sending data:", data);
    try {
      let result = await axios({
        url: "https://66ecea6a380821644cdaaaf9.mockapi.io/User",
        method: "post",
        data: data,
      });
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      console.log(result);
      toast.success("Form submitted successfully!");
    } catch (error) {
      console.log("Request failed with status code", error.response.status);
      console.log(error.response.data);
      toast.error("Unable to submit the form");
    }
  };
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">
            Don't like forms? Send me an email. 👋
          </p>
        </div>

        <form onSubmit={handleSubmit} action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Insert your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="Insert your subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

// import React from "react";
// import "./contact.css";

// const Contact = () => {
//   return (
//     <section className="contact container section" id="contact">
//       <h2 className="section__title">Get In Touch</h2>

//       <div className="contact__container grid">
//         <div className="contact__info">
//           <h3 className="contact__title">Let's talk about everything!</h3>
//           <p className="contact__details">
//             Don't like forms? Send me an email. 👋
//           </p>
//         </div>

//         <form action="" className="contact__form">
//           <div className="contact__form-group">
//             <div className="contact__form-div">
//               <input
//                 type="text"
//                 className="contact__form-input"
//                 placeholder="Insert your name"
//               />
//             </div>

//             <div className="contact__form-div">
//               <input
//                 type="email"
//                 className="contact__form-input"
//                 placeholder="Insert your email"
//               />
//             </div>
//           </div>

//           <div className="contact__form-div">
//             <input
//               type="text"
//               className="contact__form-input"
//               placeholder="Insert your subject"
//             />
//           </div>

//           <div className="contact__form-div contact__form-area">
//             <textarea
//               name=""
//               id=""
//               cols="30"
//               rows="10"
//               className="contact__form-input"
//               placeholder="Write your message"
//             ></textarea>
//           </div>

//           <button type="submit" className="btn">
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };
// export default Contact;
