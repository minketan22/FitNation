import "./Hero.css";
import heroImage from "../../assets/images/hero.png";
import Button from "../Button/Button";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>
          Transform Your Body <br />
          Transform Your <span>Life</span>
        </h1>

        <p>
          Join India's fastest growing fitness community with
          certified trainers and world-class equipment.
        </p>

        <div className="hero-buttons">
            
         <Button
        text="Get Started"
        variant="primary"
    />

    <Button
        text="Explore"
        variant="secondary"
    />
        </div>
      </div>

     <div className="hero-image">
  <img src={heroImage} alt="Gym Hero" />
</div>
    </section>
  );
}

export default Hero;