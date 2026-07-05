import "./Trainers.css";

import TrainerCard from "../TrainerCard/TrainerCard";

import trainer1 from "../../assets/images/trainer1.png";
import trainer2 from "../../assets/images/trainer2.png";
import trainer3 from "../../assets/images/trainer3.png";

function Trainers() {
  const trainers = [
    {
      image: trainer1,
      name: "John Smith",
      role: "Strength Coach",
      experience: "8 Years Experience",
    },
    {
      image: trainer2,
      name: "Emma Wilson",
      role: "Yoga Expert",
      experience: "6 Years Experience",
    },
    {
      image: trainer3,
      name: "David Brown",
      role: "Cardio Coach",
      experience: "10 Years Experience",
    },
  ];

  return (
    <section
      id="trainers"
      className="trainers"
      data-aos="fade-up"
      aria-labelledby="trainers-title"
    >
      <div className="section-title" data-aos="fade-up">
        <span>OUR TRAINERS</span>

        <h2 id="trainers-title">
          Meet Our
          <br />
          Expert Coaches
        </h2>
      </div>

      <div className="trainers-container">
        {trainers.map((trainer, index) => (
          <TrainerCard
            key={trainer.name}
            image={trainer.image}
            name={trainer.name}
            role={trainer.role}
            experience={trainer.experience}
            delay={index * 90}
          />
        ))}
      </div>
    </section>
  );
}

export default Trainers;
