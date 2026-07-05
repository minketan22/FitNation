import "./Button.css";

function Button({ text, variant, href = "#contact", type = "button" }) {
  if (href) {
    return (
      <a className={`btn ${variant}`} href={href}>
        {text}
      </a>
    );
  }

  return (
    <button className={`btn ${variant}`} type={type}>
      {text}
    </button>
  );
}

export default Button;
