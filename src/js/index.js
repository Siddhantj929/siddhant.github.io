// Importing styles

// import "animate.css";
import "../styles/main.scss";

// Importing components
// import "./components/glitchAnimation";

const splittedElements = window.Splitting();
ScrollOut();

// Adding transition-delay to chars in ghost-text
document.querySelectorAll(".animation__ghost-text").forEach(el => {
  el.querySelectorAll(".char").forEach((c, i) => {
    c.style.transitionDelay = i * 40 + "ms";
  });
});
