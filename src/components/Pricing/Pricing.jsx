import "./Pricing.css";
import Button from "../Button/Button";
import { FaCheckCircle } from "react-icons/fa";

function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "INR 999",
      duration: "/month",
      popular: false,
      features: [
        "Gym Access",
        "Locker Facility",
        "Free Water",
        "Basic Support",
      ],
    },
    {
      name: "Premium",
      price: "INR 1999",
      duration: "/month",
      popular: true,
      features: [
        "Gym Access",
        "Personal Trainer",
        "Diet Plan",
        "Locker Facility",
        "Priority Support",
      ],
    },
    {
      name: "Elite",
      price: "INR 2999",
      duration: "/month",
      popular: false,
      features: [
        "Everything in Premium",
        "24/7 Gym Access",
        "Recovery Sessions",
        "Nutrition Consultation",
        "VIP Support",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="pricing"
      data-aos="fade-up"
      aria-labelledby="pricing-title"
    >
      <div className="section-title" data-aos="fade-up">
        <span>PRICING PLAN</span>

        <h2 id="pricing-title">
          Choose Your
          <br />
          Membership
        </h2>
      </div>

      <div className="pricing-container">
        {plans.map((plan, index) => (
          <article
            className={`pricing-card ${plan.popular ? "popular" : ""}`}
            key={plan.name}
            data-aos="fade-up"
            data-aos-delay={index * 90}
          >
            {plan.popular && <div className="popular-badge">Most Popular</div>}

            <h3>{plan.name}</h3>

            <p className="plan-price">
              {plan.price}
              <span>{plan.duration}</span>
            </p>

            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <FaCheckCircle />
                  {feature}
                </li>
              ))}
            </ul>

            <Button text="Join Now" variant="primary" />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
