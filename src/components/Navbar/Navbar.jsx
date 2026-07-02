import "./Navbar.css";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Programs", id: "programs" },
  { name: "Trainers", id: "trainers" },
  { name: "Pricing", id: "pricing" },
  { name: "Testimonials", id: "testimonials" },
  { name: "Gallery", id: "gallery" },
  { name: "Contact", id: "contact" },
];

function Navbar({ gymName }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      let currentSection = links[0].id;

      links.forEach((link) => {
        const section = document.getElementById(link.id);

        if (!section) {
          return;
        }

        if (scrollPosition >= section.offsetTop) {
          currentSection = link.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
   <nav>
  <div className="nav-container">

    <h2 className="logo">{gymName}</h2>

    <ul
      id="mobile-navigation"
      className={`nav-links ${menuOpen ? "active" : ""}`}
    >
      {links.map((link) => (
        <li key={link.id}>
          <a
            href={`#${link.id}`}
            className={activeSection === link.id ? "active" : ""}
            onClick={() => {
              setActiveSection(link.id);
              setMenuOpen(false);
            }}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>

    <button className="join-btn">Join Now</button>

    <button
      type="button"
      className="menu-icon"
      aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={menuOpen}
      aria-controls="mobile-navigation"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <FaTimes /> : <FaBars />}
    </button>

  </div>
</nav>
  );
  
}


export default Navbar;
