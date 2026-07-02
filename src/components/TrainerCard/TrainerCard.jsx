import "./TrainerCard.css";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

function TrainerCard({
  image,
  name,
  role,
  experience,
  delay = 0,
}) {
  return (
    <div
      className="trainer-card"
      data-aos="fade-up"
      data-aos-delay={delay}
    >

      <img
        src={image}
        alt={name}
      />

      <h3>{name}</h3>

      <p className="role">{role}</p>

      <p className="experience">
        {experience}
      </p>
      <div className="social-icons">
      <FaInstagram />
      <FaFacebookF />
      <FaLinkedinIn />
</div>

    </div>
  );
}

export default TrainerCard;
