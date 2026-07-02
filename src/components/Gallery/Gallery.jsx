import "./Gallery.css";

import gallery1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery2.jpg";
import gallery3 from "../../assets/images/gallery3.jpg";
import gallery4 from "../../assets/images/gallery4.jpg";
import gallery5 from "../../assets/images/gallery5.jpg";
import gallery6 from "../../assets/images/gallery6.jpg";

function Gallery() {

  const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
  ];

  return (
    <section id="gallery" className="gallery" data-aos="fade-up">

      <div className="section-title" data-aos="fade-up">
        <span>OUR GALLERY</span>

        <h2>
          Explore
          <br />
          Our Gym
        </h2>
      </div>

      <div className="gallery-container">

        {images.map((image, index) => (

          <div
            className="gallery-card"
            key={index}
            data-aos="zoom-in-up"
            data-aos-delay={index * 70}
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
            />
          </div>

        ))}

      </div>

    </section>
  );
}

export default Gallery;
