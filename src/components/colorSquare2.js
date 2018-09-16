'use strict';

var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.statelessComponent("ColorSquare");

function s(prim) {
  return prim;
}

function colorCss(color) {
  switch (color) {
    case 0 : 
        return "red";
    case 1 : 
        return "green";
    case 2 : 
        return "yellow";
    case 3 : 
        return "papayawhip";
    
  }
}

function px(v) {
  return String(v) + "px";
}

function make(color, size, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function () {
              var backgroundColor = colorCss(color);
              var sizePx = String(size) + "px";
              var style = {
                backgroundColor: backgroundColor,
                height: sizePx,
                width: sizePx
              };
              return React.createElement("div", {
                          style: style
                        });
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

var $$default = ReasonReact.wrapReasonForJs(component, (function (jsProps) {
        var match = jsProps.color;
        var color;
        switch (match) {
          case "green" : 
              color = /* Green */1;
              break;
          case "red" : 
              color = /* Red */0;
              break;
          case "yellow" : 
              color = /* Yellow */2;
              break;
          default:
            color = /* Papayawhip */3;
        }
        var size = jsProps.size;
        return make(color, size, jsProps.children);
      }));

exports.component = component;
exports.s = s;
exports.colorCss = colorCss;
exports.px = px;
exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* component Not a pure module */
