import "./styles/variables.css";
import "./styles/animations.css";
import "./styles/styles.css";
import "./styles/header.css";
import "./styles/projects.css";
import "./styles/footer.css";

/**
 * The intersection module is only downloaded if the user does not have a reduced motion preference.
 */
const hasReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!hasReducedMotion) {
    const {initializeObserver} = await import("./modules/scrollReveal");
    initializeObserver();
}