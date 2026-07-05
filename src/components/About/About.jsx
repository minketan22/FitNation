import "./About.css";
import aboutImage from "../../assets/images/about.png";
import Button from "../Button/Button";
import { FaCheckCircle } from "react-icons/fa";

function About() {

  const features = [
    "Certified Trainers",
    "Modern Equipment",
    "Personalized Workout Plans",
    "Nutrition Guidance",
  ];

  return (
    
    <section
      id="about"
      className="about"
      data-aos="fade-up"
      aria-labelledby="about-title"
    >

      <div className="about-image">
        <img
          src={aboutImage}
          alt="Personal trainer guiding members through a strength workout at FitNation"
        />
      </div>

      <div className="about-content" data-aos="fade-up">

        <span className="about-subtitle"> 
          WHY CHOOSE FITNATION
        </span>

        <h2 id="about-title">
          Train Smarter,
          <br />
          Become Stronger
        </h2>

        <p>
          We provide expert coaching, world-class equipment,
          and customized fitness programs to help you achieve
          your goals faster.
        </p>

        <div className="feature-list">

          {features.map((feature) => (
            <div className="feature" key={feature}>
              <FaCheckCircle className="check-icon" />
              <span>{feature}</span>
            </div>
          ))}

        </div>

        <Button
          text="Join Today"
          variant="primary"
        />

      </div>

    </section>
  );
}

export default About;
