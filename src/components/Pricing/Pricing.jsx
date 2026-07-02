import "./Pricing.css";
import Button from "../Button/Button";
import { FaCheckCircle } from "react-icons/fa";

function Pricing() {
const plans = [
  {
    name: "Basic",
    price: "₹999",
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
    price: "₹1999",
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
    price: "₹2999",
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
    <section id="pricing" className="pricing" data-aos="fade-up">

      <div className="section-title" data-aos="fade-up">
        <span>PRICING PLAN</span>

        <h2>
          Choose Your
          <br />
          Membership
        </h2>
      </div>

      <div className="pricing-container">

        {plans.map((plan, index) => (

          <div
            className={`pricing-card ${
              plan.popular ? "popular" : ""
            }`}
            key={plan.name}
            data-aos="fade-up"
            data-aos-delay={index * 90}
          >

            {plan.popular && (
              <div className="popular-badge">
                ⭐ Most Popular
              </div>
            )}

            <h3>{plan.name}</h3>

            <h2>
              {plan.price}
              <span>{plan.duration}</span>
            </h2>

            <ul>

              {plan.features.map((feature) => (

                <li key={feature}>
                  <FaCheckCircle />
                  {feature}
                </li>

              ))}

            </ul>

            <Button
              text="Join Now"
              variant="primary"
            />

          </div>

        ))}

      </div>

    </section>
  );
}

export default Pricing;
