import { Link } from "react-router-dom";
import "./step.css";

function Step() {
  return (
    <main>
      <h1>Steg 1</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam eius illo dolore
        dicta voluptas. Laboriosam recusandae voluptates ipsum totam, dolorum aliquid
        officiis ex, sequi maxime laudantium, suscipit quod exercitationem molestiae!
      </p>
      <Link to="/steg-2">Steg 2</Link>
    </main>
  );
}

export default Step;
