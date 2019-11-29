"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _about = _interopRequireDefault(require("../about/about.jsx"));

var _projectFeed = _interopRequireDefault(require("../projectFeed/projectFeed.jsx"));

var _composition = _interopRequireDefault(require("../composition/composition.jsx"));

var _software = _interopRequireDefault(require("../software/software.jsx"));

var _contact = _interopRequireDefault(require("../contact/contact.jsx"));

var _crypto = require("crypto");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Page =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page(props) {
    var _this;

    _classCallCheck(this, Page);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Page).call(this));

    _defineProperty(_assertThisInitialized(_this), "state", {
      page: 0
    });

    _defineProperty(_assertThisInitialized(_this), "getPage", function (page) {
      switch (page) {
        case 0:
          return React.createElement(_about["default"], null);
          break;

        case 1:
          return React.createElement(_composition["default"], null);
          break;

        case 2:
          return React.createElement(_software["default"], null);
          break;

        case 3:
          return React.createElement(_projectFeed["default"], null);
          break;

        case 4:
          return React.createElement(_contact["default"], null);
          break;
      }
    });

    return _this;
  }

  _createClass(Page, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        page: this.props.page
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      this.setState(function (prevProps) {
        prevProps = newProps;
        return prevProps;
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log("Page: " + this.state.page);
      return React.createElement("div", {
        className: "pageContainer"
      }, this.getPage(this.state.page));
    }
  }]);

  return Page;
}(React.Component);

exports["default"] = Page;