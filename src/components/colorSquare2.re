let component = ReasonReact.statelessComponent("ColorSquare");

let s = ReasonReact.string;

type color =
  | Red
  | Green
  | Yellow
  | Papayawhip;

let colorCss = color =>
  switch (color) {
  | Red => "red"
  | Green => "green"
  | Yellow => "yellow"
  | Papayawhip => "papayawhip"
  };

let px = v => string_of_int(v) ++ "px";

let make = (~color: color, ~size: int, _children) => {
  ...component,
  render: _self => {
    let backgroundColor = colorCss(color);
    let sizePx = px(size);
    let style =
      ReactDOMRe.Style.make(
        ~backgroundColor,
        ~height=sizePx,
        ~width=sizePx,
        (),
      );
    <div style />;
  },
};

let default =
  ReasonReact.wrapReasonForJs(
    ~component,
    jsProps => {
      let color =
        switch (jsProps##color) {
        | "red" => Red
        | "green" => Green
        | "yellow" => Yellow
        | _ => Papayawhip
        };

      let size = jsProps##size;

      make(~color, ~size, jsProps##children);
    },
  );