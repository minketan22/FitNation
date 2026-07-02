import "./Contact.css";
import { useState } from "react";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const WHATSAPP_NUMBER = "917858913382"; // Replace with your WhatsApp number in international format without '+' or leading zeros

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (error) {
      setError("");
    }

    if (successMessage) {
      setSuccessMessage("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedForm = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
    };

    if (
      !trimmedForm.name ||
      !trimmedForm.email ||
      !trimmedForm.phone ||
      !trimmedForm.message
    ) {
      setSuccessMessage("");
      setError("Please fill in all fields before sending your enquiry.");
      return;
    }

    const whatsappMessage = [
      "Hello FitNation, I would like to enquire about joining.",
      "",
      `Name: ${trimmedForm.name}`,
      `Email: ${trimmedForm.email}`,
      `Phone: ${trimmedForm.phone}`,
      `Message: ${trimmedForm.message}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    setError("");
    setSuccessMessage("Opening WhatsApp with your enquiry...");

    const popup = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    if (!popup) {
      window.location.href = whatsappUrl;
    }

    setFormData(initialForm);
  };

  return (
    <section id="contact" className="contact" data-aos="fade-up">

      <div className="section-title" data-aos="fade-up">
        <span>CONTACT US</span>

        <h2>
          Let's Start Your
          <br />
          Fitness Journey
        </h2>
      </div>

      <div className="contact-container">

        {/* Left Side */}

        <div className="contact-info" data-aos="fade-up">

          <div className="info-box" data-aos="fade-up" data-aos-delay="0">
            <FaMapMarkerAlt />
            <div>
              <h3>Address</h3>
              <p>Mullana, Ambala, Haryana</p>
            </div>
          </div>

          <div className="info-box" data-aos="fade-up" data-aos-delay="80">
            <FaPhoneAlt />
            <div>
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="info-box" data-aos="fade-up" data-aos-delay="160">
            <FaEnvelope />
            <div>
              <h3>Email</h3>
              <p>info@tanugym.com</p>
            </div>
          </div>

          <div className="info-box" data-aos="fade-up" data-aos-delay="240">
            <FaClock />
            <div>
              <h3>Working Hours</h3>
              <p>Mon - Sat : 6 AM - 10 PM</p>
            </div>
          </div>

        </div>

        {/* Right Side */}

        <form
          className="contact-form"
          data-aos="fade-up"
          data-aos-delay="120"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          {error && <p className="form-message error-message">{error}</p>}
          {successMessage && (
            <p className="form-message success-message">{successMessage}</p>
          )}

          <button type="submit">
            Send on WhatsApp
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;
