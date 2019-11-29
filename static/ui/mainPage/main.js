"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _introMessage = _interopRequireDefault(require("./introMessage.jsx"));

var _page = _interopRequireDefault(require("./page.jsx"));

var _pageHeaer = _interopRequireDefault(require("../pageHeaer.jsx"));

var _navigation = _interopRequireDefault(require("./navigation.jsx"));

var _navBar = _interopRequireDefault(require("./navBar.jsx"));

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

var Main =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main() {
    var _this;

    _classCallCheck(this, Main);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Main).call(this));

    _defineProperty(_assertThisInitialized(_this), "state", {
      page: 0
    });

    _defineProperty(_assertThisInitialized(_this), "changePage", function (id) {
      console.log(id);

      _this.setState({
        page: id
      });
    });

    _defineProperty(_assertThisInitialized(_this), "fun", function () {
      return 'hello';
    });

    return _this;
  }

  _createClass(Main, [{
    key: "render",
    // <IntroMessage />
    value: function render() {
      console.log("Mainpage: " + this.state.page);
      return _react["default"].createElement("div", {
        className: "Main",
        style: {
          width: "100%",
          height: "100%"
        }
      }, _react["default"].createElement(_pageHeaer["default"], null), _react["default"].createElement(_navBar["default"], null), _react["default"].createElement(_page["default"], {
        page: this.state.page
      }), _react["default"].createElement(_navigation["default"], {
        changePage: this.changePage
      }));
    }
  }]);

  return Main;
}(_react["default"].Component);

exports["default"] = Main;