"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _aboutLogo = _interopRequireDefault(require("../../../static/media/aboutLogo.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var NavBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavBar, _React$Component);

  function NavBar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NavBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NavBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      hoverArr: [false, false, false, false, false]
    });

    _defineProperty(_assertThisInitialized(_this), "hover", function (id, hovering) {
      _this.setState(function (prevState) {
        var hoverArr = prevState.hoverArr;
        hoverArr[id] = hovering;
        prevState.hoverArr = hoverArr;
        return prevState;
      });
    });

    return _this;
  }

  _createClass(NavBar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement("div", {
        id: "navBar",
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          width: "60px",
          height: "100%",
          margin: "auto",
          padding: 0
        }
      }, React.createElement("div", {
        style: {
          position: "relative",
          top: "calc(50% - 205px)",
          height: "405px"
        }
      }, React.createElement("div", {
        className: "about",
        id: "navButton",
        onMouseEnter: function onMouseEnter() {
          _this2.hover(0, true);
        },
        onMouseLeave: function onMouseLeave() {
          _this2.hover(0, false);
        }
      }, this.state.hoverArr[0] ? React.createElement("h1", {
        "class": "reveal-text",
        style: {
          fontSize: "50px",
          margin: "auto",
          paddingTop: "10px",
          textAlign: "center",
          width: "152px",
          background: "#161c26",
          marginLeft: "7px"
        }
      }, "About") : React.createElement("h1", {
        style: {
          fontSize: "50px",
          textAlign: "center",
          margin: "auto",
          paddingTop: "10px",
          background: "#161c26"
        }
      }, "~")), React.createElement("div", {
        className: "composition",
        id: "navButton",
        onMouseEnter: function onMouseEnter() {
          _this2.hover(1, true);
        },
        onMouseLeave: function onMouseLeave() {
          _this2.hover(1, false);
        }
      }, this.state.hoverArr[1] ? React.createElement("h1", {
        "class": "reveal-text",
        style: {
          fontSize: "50px",
          textAlign: "center",
          margin: "auto",
          paddingTop: "10px",
          width: "293px",
          background: "#161c26",
          marginLeft: "9px"
        }
      }, "Composition") : React.createElement("h1", {
        style: {
          fontSize: "50px",
          textAlign: "center",
          margin: "auto",
          paddingTop: "10px",
          background: "#161c26"
        }
      }, "~")), React.createElement("div", {
        className: "research",
        id: "navButton",
        onMouseEnter: function onMouseEnter() {
          _this2.hover(2, true);
        },
        onMouseLeave: function onMouseLeave() {
          _this2.hover(2, false);
        }
      }, this.state.hoverArr[2] ? React.createElement("h1", {
        "class": "reveal-text",
        style: {
          fontSize: "50px",
          textAlign: "center",
          margin: "auto",
          paddingTop: "10px",
          width: "215px",
          background: "#161c26",
          marginLeft: "10px"
        }
      }, "Research") : React.createElement("h1", {
        style: {
          fontSize: "50px",
          textAlign: "center",
          margin: "auto",
          paddingTop: "10px",
          background: "#161c26"
        }
      }, "~")), React.createElement("div", {
        className: "software",
        id: "navButton",
        onMouseEnter: function onMouseEnter() {
          _this2.hover(3, true);
        },
        onMouseLeave: function onMouseLeave() {
          _this2.hover(3, false);
        }
      }, this.state.hoverArr[3] ? React.createElement("h1", {
        "class": "reveal-text",
        style: {
          fontSize: "50px",
          textAlign: "center",
          margin: "auto",
          paddingTop: "10px",
          width: "214px",
          background: "#161c26",
          marginLeft: "11px"
        }
      }, "Software") : React.createElement("h1", {
        style: {
          fontSize: "50px",
          textAlign: "center",
          margin: "auto",
          paddingTop: "10px",
          background: "#161c26"
        }
      }, "~")), React.createElement("div", {
        className: "contact",
        id: "navButton",
        onMouseEnter: function onMouseEnter() {
          _this2.hover(4, true);
        },
        onMouseLeave: function onMouseLeave() {
          _this2.hover(4, false);
        }
      }, this.state.hoverArr[4] ? React.createElement("h1", {
        "class": "reveal-text",
        style: {
          fontSize: "50px",
          textAlign: "center",
          margin: "auto",
          paddingTop: "10px",
          width: "197px",
          background: "#161c26",
          marginLeft: "5px"
        }
      }, "Contact") : React.createElement("h1", {
        style: {
          fontSize: "50px",
          textAlign: "center",
          margin: "auto",
          paddingTop: "10px",
          background: "#161c26"
        }
      }, "~"))));
    }
  }]);

  return NavBar;
}(React.Component);
/* <div id={"navButton"} style={{ width: "20%"}}><h1 style={{margin: "auto", textAlign: "center"}}>Softare</h1></div>
                <div id={"navButton"} style={{ width: "20%"}}><h1 style={{margin: "auto", textAlign: "center"}}>Project Feed</h1></div>
                <div id={"navButton"} style={{width: "20%"}}><h1 style={{margin: "auto", textAlign: "center"}}>Contact</h1></div>
                */


exports["default"] = NavBar;

var SvgAboutLogo = function SvgAboutLogo(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 246.31 246.31"
  }, props), React.createElement("defs", null, React.createElement("style", null, ".aboutLogo_svg__cls-1{fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:6.66px;fill:#fff}")), React.createElement("g", {
    id: "aboutLogo_svg__Layer_1",
    "data-name": "Layer 1"
  }, React.createElement("path", {
    className: "aboutLogo_svg__cls-1",
    d: "M95.68 96.45c0-23.19 13.2-42 36.39-42s34.52 18.8 34.52 42-11.34 42-34.52 42-36.39-18.82-36.39-42z",
    transform: "translate(-7.05 -6.88)"
  }), React.createElement("path", {
    className: "aboutLogo_svg__cls-1",
    d: "M42.5 239.19S30.25 216.74 63 176.68c8.39-10.26 44.78-20.52 44.78-20.52l.93-24.26M218.46 239.19s12.25-22.45-20.52-62.51c-8.4-10.26-44.79-20.52-44.79-20.52l-.93-24.26M79.82 239.19s.93-22.39 8.4-28.92M186.18 239.19s-.93-22.39-8.4-28.92",
    transform: "translate(-7.05 -6.88)"
  })));
};

var SvgCompositionLogo = function SvgCompositionLogo(props) {
  return React.createElement("svg", _extends({
    id: "compositionLogo_svg__Layer_1",
    "data-name": "Layer 1",
    viewBox: "0 0 246.31 246.31"
  }, props), React.createElement("defs", null, React.createElement("style", null, ".compositionLogo_svg__cls-1{fill:#fff;stroke:#fff;stroke-miterlimit:10;stroke-width:6.66px}")), React.createElement("path", {
    className: "compositionLogo_svg__cls-1",
    d: "M52.45 101.62v52h25l28.5 28.5V76.62L81.2 101.37l-28.75.25z"
  }), React.createElement("circle", {
    className: "compositionLogo_svg__cls-1",
    cx: 152.45,
    cy: 145.62,
    r: 16
  }), React.createElement("path", {
    className: "compositionLogo_svg__cls-1",
    d: "M168.45 145.62v-72M173.45 82.62l17 9"
  }));
};