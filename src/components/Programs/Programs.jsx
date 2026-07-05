import "./Programs.css";
import { FaDumbbell, FaRunning, FaSpa, FaHeartbeat } from "react-icons/fa";

function Programs() {
  const programs = [
    {
      icon: <FaDumbbell />,
      title: "Strength Training",
      description:
        "Build muscle, increase strength and improve your overall fitness.",
    },
    {
      icon: <FaRunning />,
      title: "Cardio Training",
      description:
        "Boost endurance and burn calories with high-energy workouts.",
    },
    {
      icon: <FaSpa />,
      title: "Yoga Classes",
      description:
        "Improve flexibility, balance and mental wellness every day.",
    },
    {
      icon: <FaHeartbeat />,
      title: "CrossFit",
      description:
        "High-intensity functional workouts to improve strength and endurance.",
    },
  ];

  return (
    <section
      id="programs"
      className="programs"
      data-aos="fade-up"
      aria-labelledby="programs-title"
    >
      <div className="section-title" data-aos="fade-up">
        <span>OUR PROGRAMS</span>

        <h2 id="programs-title">
          Build the Perfect Workout
          <br />
          For Your Goals
        </h2>
      </div>

      <div className="program-container">
        {programs.map((program, index) => (
          <article
            className="program-card"
            key={program.title}
            data-aos="fade-up"
            data-aos-delay={index * 90}
          >
            <div className="program-icon">{program.icon}</div>

            <h3>{program.title}</h3>

            <p>{program.description}</p>

            <a className="learn-btn" href="#contact">
              Learn More -&gt;
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Programs;
