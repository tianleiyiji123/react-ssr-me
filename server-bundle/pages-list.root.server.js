/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "pages-list";
exports.ids = ["pages-list"];
exports.modules = {

/***/ "./src/pages/list/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/list/index.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_corejs3_core_js_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/map */ \"./node_modules/@babel/runtime-corejs3/core-js/instance/map.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_instance_map__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/array/from */ \"./node_modules/@babel/runtime-corejs3/core-js/array/from.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_date_now__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/date/now */ \"./node_modules/@babel/runtime-corejs3/core-js/date/now.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_date_now__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"./node_modules/isomorphic-style-loader/withStyles.js\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.less */ \"./src/pages/list/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\n\n\n\n\n\nvar List = () => {\n  var _context;\n\n  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useHistory)();\n  var [state, setState] = react__WEBPACK_IMPORTED_MODULE_3__.useState(1);\n  var increase = react__WEBPACK_IMPORTED_MODULE_3__.useCallback(() => {\n    setState(t => t + 1);\n  }, []); // const jumpToDetail = (imgUrl: string) => {\n  //   history.push(`/detail/${encodeURIComponent(imgUrl)}`)\n  // }\n\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"div\", {\n    className: (_index_less__WEBPACK_IMPORTED_MODULE_5___default().list),\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"ul\", {\n      children: _babel_runtime_corejs3_core_js_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = _babel_runtime_corejs3_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(new Array(20), () => null)).call(_context, (item, index) => {\n        var img = \"https://unsplash.it/50/50?a=\".concat(_babel_runtime_corejs3_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default()() + index);\n        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"li\", {\n          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {\n            to: \"/detail/\".concat(encodeURIComponent(img)),\n            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"img\", {\n              src: img,\n              alt: \"\\u56FE\\u7247\"\n            })\n          })\n        }, item + '-' + index);\n      })\n    })\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_4___default()((_index_less__WEBPACK_IMPORTED_MODULE_5___default()))(List));\n\n//# sourceURL=webpack://react-ssr/./src/pages/list/index.tsx?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/pages/list/index.less":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/pages/list/index.less ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".list_1629960127349 {\\n  width: 100px;\\n}\\n\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"list\": \"list_1629960127349\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack://react-ssr/./src/pages/list/index.less?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B3%5D.use%5B1%5D!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B3%5D.use%5B3%5D");

/***/ }),

/***/ "./src/pages/list/index.less":
/*!***********************************!*\
  !*** ./src/pages/list/index.less ***!
  \***********************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./index.less */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/pages/list/index.less\");\n    var insertCss = __webpack_require__(/*! !../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.id, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack://react-ssr/./src/pages/list/index.less?");

/***/ })

};
;