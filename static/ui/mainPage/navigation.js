"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _DoorwaySVG = _interopRequireDefault(require("../../../static/media/DoorwaySVG.svg"));

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

var Navigation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation(props) {
    var _this;

    _classCallCheck(this, Navigation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Navigation).call(this));

    _defineProperty(_assertThisInitialized(_this), "state", {
      pages: ['About', 'Composition', 'Software', 'Project Feed', 'Contact'],
      parallax: 0
    });

    _defineProperty(_assertThisInitialized(_this), "button", function (pageName, key) {
      return React.createElement("div", {
        key: key
      }, React.createElement("button", {
        className: "NaviButton",
        key: key,
        onClick: function onClick() {
          return _this.naviClick(key);
        }
      }, pageName));
    });

    _defineProperty(_assertThisInitialized(_this), "naviClick", function (id) {
      _this.props.changePage(id);
    });

    _defineProperty(_assertThisInitialized(_this), "doorway", function (colour, leftOff, leftBSize, doorWidth, doorHeight, yOff, size) {
      var rightBlockOff = leftOff + leftBSize + doorWidth;
      var rightBlockWidth = size[0] - leftBSize - doorWidth;
      return React.createElement("div", {
        style: {
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%"
        },
        className: "doorWayDiv"
      }, React.createElement("svg", {
        style: {
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%"
        }
      }, React.createElement("rect", {
        x: leftOff + "%",
        y: yOff + "%",
        width: leftBSize + "%",
        height: size[1] + "%",
        rx: "0",
        ry: "0",
        fill: colour
      }), React.createElement("rect", {
        x: leftOff + "%",
        y: yOff + "%",
        width: size[0] + "%",
        height: doorHeight + "%",
        rx: "0",
        ry: "0",
        fill: colour
      }), React.createElement("rect", {
        x: rightBlockOff + "%",
        y: yOff + "%",
        width: rightBlockWidth + "%",
        height: size[1] + "%",
        rx: "0",
        ry: "0",
        fill: colour
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "doorWays", function () {
      var doors = [];

      for (var i = 0; i < 5; i++) {}
    });

    _defineProperty(_assertThisInitialized(_this), "mouseMove", function (e) {
      _this.setState({
        parallax: e.screenX
      });
    });

    return _this;
  }

  _createClass(Navigation, [{
    key: "floor",
    value: function floor(yOffset, colour) {
      return React.createElement("div", {
        style: {
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%"
        },
        className: "floorDiv"
      }, React.createElement("svg", {
        style: {
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%"
        }
      }, React.createElement("rect", {
        x: 0,
        y: "70%",
        width: "100%",
        height: "30%",
        fill: colour
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var pageButtons = this.state.pages.map(function (pageName, i) {
        return _this2.button(pageName, i);
      });
      var parallax = (window.innerWidth - this.state.parallax) / (window.innerWidth / 2) * 4;
      var push = [0, 0, 0, 0, 0];

      if (parallax < 0.5 * 4) {
        push[4] = 4;
      } else if (parallax < 1 * 4) {
        push[3] = 4;
      } else if (parallax < 1.5 * 4) {
        push[2] = 4;
      } else if (parallax < 2 * 4) {
        push[1] = 4;
      }

      parallax = parallax - 0.5;
      return (// <div className="navigationBar">
        //     {
        //         pageButtons
        //     }
        // </div>
        React.createElement("div", {
          style: {
            width: "100%",
            height: "100%"
          },
          onMouseMove: this.mouseMove
        })
      );
    }
  }]);

  return Navigation;
}(React.Component);
/* 
      
{
    this.floor(0, "#B3B3B3")
}

{
    this.doorway("rgb(150, 150, 150)", 17 + parallax * 0.2 + push[4] - 10, 10, 60, 5, -20, [100, 100])
}
<h1 id="aboutTitle" style={{
    position: "fixed", left: 17 + parallax * 0.2 + push[4] + 5 - 10 + "%", top: "30%"
}}>RESEARCH</h1>


{
    this.doorway("rgb(175, 175, 175)", 14 + parallax * 0.4 + push[3] - 10, 10, 60, 5, -15, [100, 100])
}

<h1 id="aboutTitle" style={{
    position: "fixed", left: (14 + parallax * 0.4 + push[3]) + 5 - 10 + "%", top: "30%"
}}>SOFTWARE</h1> 


{
    this.doorway("rgb(200, 200,200)", 11 + parallax * 0.6 + push[2] - 10, 10, 60, 5, -10, [100, 100])
}

<h1 id="aboutTitle" style={{
    position: "fixed", left: ( 11 + parallax * 0.6 + push[2]) + 5 + - 10 + "%", top: "30%"
}}>COMPOSITION</h1> 


{
    this.doorway("rgb(225, 225, 225)", 8 + parallax * 0.8 + - 10 + push[1], 10, 60, 5, -5, [100, 100])
}

<h1 id="aboutTitle" style={{
    position: "fixed", left: 8 + parallax * 0.8 + push[1] + 5 +  - 10 + "%", top: "30%"
}}>COMPOSITION</h1>

{
    this.doorway("rgb(255, 255, 255)", 5 + parallax + push[0]  - 10, 10, 60, 5, 0, [100, 100])
}




<h1 id="aboutTitle" style={{
    position: "fixed", left: (5 + parallax + push[0]) + 5 - 10 + "%", top: "30%"
}}>ABOUT</h1>  
*/


exports["default"] = Navigation;