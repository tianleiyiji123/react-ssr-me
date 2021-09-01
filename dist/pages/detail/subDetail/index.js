"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _index = _interopRequireDefault(require("./index.less"));

var _jsxRuntime = require("react/jsx-runtime");

var SubDetail = () => {
  var {
    imgUrl
  } = (0, _reactRouterDom.useParams)();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: _index.default.detail,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
      children: "\u6211\u662F\u5B50\u8BE6\u60C5"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_button.default, {
      type: "primary",
      children: "\u70B9\u51FB\u53BB\u5217\u8868"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      src: decodeURIComponent(imgUrl),
      alt: "\u56FE\u7247"
    })]
  });
};

var _default = SubDetail;
exports.default = _default;