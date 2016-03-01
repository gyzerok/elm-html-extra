var toHtml = require('vdom-to-html');

Elm.Native.HtmlUtils = {};
Elm.Native.HtmlUtils.make = function (elm) {
  elm.Native = elm.Native || {};
  elm.Native.HtmlUtils = elm.Native.HtmlUtils || {};

  if (elm.Native.HtmlUtils.values) {
    return elm.Native.HtmlUtils.values;
  }

  return elm.Native.HtmlUtils.values = {
    toString: toHtml
  };
}
