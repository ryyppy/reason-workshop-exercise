let component = ReasonReact.statelessComponent("HelloWorld");

let make = _children => {
  ...component,
  render: _self => <div>
  <ColorSquare2 color=Yellow size=50 />
  <ColorSquare2 color=Red size=100/>
   </div>,
};

let default = ReasonReact.wrapReasonForJs(~component, _jsProps => make([||]));
