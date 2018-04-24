import React from "react";
import Link from "gatsby-link";

import ColorSquare from "../components/colorSquare";

const Step2 = () => (
  <div>
    <h1>Let{"'"}s use it in our Mars Rocket!</h1>
    <div>
      <pre>
        {`
        <ColorSquare color="green" />
        <ColorSquare color="red" size="50" />
        <ColorSquare size={100} />
        `}
      </pre>
    </div>
    <div>
      <ColorSquare color="green" />
      <ColorSquare color="red" size="50" />
      <ColorSquare size={100} />
    </div>

    <p>
      As you can see our astronauts completely misused the ColorSquare component
      in a critical situation. BOOM!
    </p>

    <img src="https://media.giphy.com/media/sPxAkSpqcT3c4/giphy.gif" />

    <p>
      Let{"'"}s make sure this won{"'"}t happen in the future. Let{"'"}s go back
      to step one and re-write it to Reason.
    </p>

    <div>
      <Link to="/">Back to the start</Link>
    </div>
  </div>
);

export default Step2;
