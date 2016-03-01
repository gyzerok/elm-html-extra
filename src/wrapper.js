var toHtml = require('vdom-to-html');

Elm.Native.Html = {};
Elm.Native.Html.make = function (elm) {
  elm.Native = elm.Native || {};
  elm.Native.Html = elm.Native.Html || {};

  if (elm.Native.Html.values) {
    return elm.Native.Html.values;
  }

  return elm.Native.Html.values = {
    toString: toHtml
  };
}
