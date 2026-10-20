import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: ""
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Contact form information:", formData);

    alert("Thank you for your message!");
    navigate("/");
  }

  return (
    <div id="contact">
      <h1>Contact Me</h1>

      <h2>Contact Information</h2>
      <p>Email: pdhanoa3@my.centennialcollege.ca</p>
      <p>Location: Toronto, Ontario, Canada</p>

      <h2>Send Me a Message</h2>

      <form onSubmit={handleSubmit}>
        <p>First Name:</p>
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <p>Last Name:</p>
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <p>Contact Number:</p>
        <input
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <p>Email Address:</p>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <p>Message:</p>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <br />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;