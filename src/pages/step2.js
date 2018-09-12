import React from "react";
import Link from "gatsby-link";

import ColorSquare from "../components/colorSquare";

const usageExample = `<ColorSquare color="green" />
<ColorSquare color="red" size="50" />
<ColorSquare size={100} />`;

const helloWorldExample = `let component = ReasonReact.statelessComponent("HelloWorld");

let make = _children => {
  ...component,
  render: _self => <div> (ReasonReact.stringToElement("HelloWorld")) </div>,
};

let default = ReasonReact.wrapReasonForJs(~component, _jsProps => make([||]));`;

const bsConfig = `{
  "name": "reason-workshop-gatsby",
  "version": "0.1.0",
  "reason": {
    "react-jsx": 2
  },
  "sources": {
    "dir": "src",
    "subdirs": true
  },
  "package-specs": {
    "module": "commonjs",
    "in-source": true
  },
  "suffix": ".js",
  "bs-dependencies": ["reason-react"],
  "bsc-flags": ["-bs-no-version-header", "-bs-super-errors"]
}`;

const Step2 = () => (
  <div>
    <h1>
      Let
      {"'"}s use it in our Mars Rocket!
    </h1>
    <div>
      <pre>{usageExample}</pre>
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
      Let
      {"'"}s make sure this won
      {"'"}t happen in the future. Let
      {"'"}s go back to step one and re-write it to Reason.
    </p>

    <ul>
      <li>
        Run `npm install -D bs-platform` and `npm install -P reason-react`
      </li>
      <li>
        Create a `bsconfig.json` in the project root directory:
        <pre>{bsConfig}</pre>
      </li>
      <li>
        Add a script to compile the Reason files: e.g.{" "}
        <tt>bs:watch": "bsb -make-world -w</tt> and then run{" "}
        <tt>npm run bs:watch</tt>. (Pro tip: Run the watch command in your
        VSCode terminal window to see compiler errors immediatly)
      </li>
      <li>
        As a starting point you can add the file <tt>src/pages/exercise.re</tt> and use
        this code:
        <pre>{helloWorldExample}</pre>
      </li>
    </ul>

    <p>
      This automatically will compile to <tt>exercise.js</tt> and due how Gatsby works
      you can see the result in{" "}
      <Link to="/exercise">http://localhost:8000/exercise</Link>
    </p>

    <p>
      Now you can create a file <tt>src/components/colorSquare2.re</tt> and create your
      component in it. In the beginning we recommend to only use it in
      <tt>exercise.re</tt>.
    </p>

    <p>
      Once you got it working make sure you use colorSquare2 for for the tests
      in `step1.js` and in `step2.js`.
    </p>

    <div>
      <Link to="/step1">Back to Step 1</Link>
    </div>
  </div>
);

export default Step2;
