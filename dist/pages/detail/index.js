"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

require("antd/lib/table/style");

var _table = _interopRequireDefault(require("antd/lib/table"));

require("antd/lib/space/style");

var _space = _interopRequireDefault(require("antd/lib/space"));

require("antd/lib/tag/style");

var _tag = _interopRequireDefault(require("antd/lib/tag"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/instance/map"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _index = _interopRequireDefault(require("./index.less"));

var _jsxRuntime = require("react/jsx-runtime");

var Detail = () => {
  var {
    imgUrl
  } = (0, _reactRouterDom.useParams)();
  var columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
      children: text
    })
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  }, {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: (0, _map.default)(tags).call(tags, tag => {
        var color = tag.length > 5 ? 'geekblue' : 'green';

        if (tag === 'loser') {
          color = 'volcano';
        }

        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_tag.default, {
          color: color,
          children: tag.toUpperCase()
        }, tag);
      })
    })
  }, {
    title: 'Action',
    key: 'action',
    render: (text, record) => /*#__PURE__*/(0, _jsxRuntime.jsxs)(_space.default, {
      size: "middle",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
        children: ["Invite ", record.name]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        children: "Delete"
      })]
    })
  }];
  var data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }];
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: _index.default.detail,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
      href: "/subDetail",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        src: decodeURIComponent(imgUrl),
        alt: "\u56FE\u7247"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_table.default, {
      columns: columns,
      dataSource: data
    })]
  });
};

var _default = Detail;
exports.default = _default;