let component = ReasonReact.statelessComponent("HelloWorld");

let make = _children => {
  ...component,
  render: _self => <div> (ReasonReact.string("HelloWorld")) </div>,
};

let default = ReasonReact.wrapReasonForJs(~component, _jsProps => make([||]));