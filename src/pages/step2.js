import React from "react";
import Link from "gatsby-link";

import ColorSquare from "../components/colorSquare";

const usageExample = `<ColorSquare color="green" />
<ColorSquare color="red" size="50" />
<ColorSquare size={100} />`;

const helloWorldExample = `let component = ReasonReact.statelessComponent("HelloWorld");

let make = _children => {
  ...component,
  render: _self => <div> (ReasonReact.string("HelloWorld")) </div>,
};

let default = ReasonReact.wrapReasonForJs(~component, _jsProps => make([||]));`;

const bsConfig = `{
  "name": "reason-workshop-exercise",
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
        Run <tt>npm install -D bs-platform@^4.0.5</tt> and{" "}
        <tt>npm install -P "github:reasonml/reason-react#6d2d965"</tt>
      </li>
      <li>
        Create a <tt>bsconfig.json</tt> in the project root directory:
        <pre>{bsConfig}</pre>
      </li>
      <li>
        Add a script to compile the Reason files: e.g.{" "}
        <tt>"bs:watch": "bsb -make-world -w"</tt> and then run{" "}
        <tt>npm run bs:watch</tt>. (Pro tip: Run the watch command in your
        VSCode terminal window to see compiler errors immediatly)
      </li>
      <li>
        As a starting point you can add the file <tt>src/pages/exercise.re</tt>{" "}
        and use this code:
        <pre>{helloWorldExample}</pre>
      </li>
    </ul>

    <p>
      This automatically will compile to <tt>exercise.js</tt> and due how Gatsby
      works you can see the result in{" "}
      <Link to="/exercise" target="_blank">
        http://localhost:8000/exercise
      </Link>
    </p>

    <p>
      Now you can create a file <tt>src/components/colorSquare2.re</tt> and
      create your component in it. In the beginning we recommend to only use it
      in
      <tt>exercise.re</tt>.
    </p>

    <p>
      Until you are sure everything works in your <tt>exercise.re</tt> file, we
      will replace the initial <tt>{"<ColorSquare />"}</tt> component with our
      newly written <tt>{"<ColorSquare2 />"}</tt> in <tt>src/pages/step1.js</tt>{" "}
      and <tt>src/pages/step2.js</tt> This task will require you to build the
      glue code between the Reason React component and the existing JS code.
    </p>

    <p>
      Goal of this workshop is also to teach you an intution on where to look up
      information in certain scenarios. So here is a list of useful links + some
      keywords:
      <ul>
        <li>
          <a href="https://bucklescript.github.io" target="_blank">
            BuckleScript documentation
          </a>
          : JS / OCaml / Reason interop layer; Writing bindings for existing JS
          libraries; JS related functions & infos about BuckleScripts utility
          library called <tt>Belt</tt> (Belt.Array, etc.){" "}
        </li>
        <li>
          <a href="https://reasonml.github.io/reason-react" target="_blank">
            ReasonReact
          </a>
          : The official ReasonReact documentation page (lifecycle,
          reducerComponents, statelessComponents, using JS components in Reason,
          using Reason components in JS, etc.)
        </li>
        <li>
          <a href="https://reasonml.github.io" target="_blank">
            ReasonML
          </a>
          : The official Reason webpage; Reason / OCaml based data types & some
          BuckleScript related interop types; Basic language features; JSX
          syntax
        </li>
      </ul>
    </p>

    <div>
      <Link to="/step1">Back to Step 1</Link>
    </div>
  </div>
);

export default Step2;
