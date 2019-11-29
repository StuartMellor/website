"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _feedTemplate = _interopRequireDefault(require("./feedTemplate.jsx"));

var _axios = _interopRequireDefault(require("axios"));

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

var Composition =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Composition, _React$Component);

  function Composition() {
    var _this;

    _classCallCheck(this, Composition);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Composition).call(this));

    _defineProperty(_assertThisInitialized(_this), "state", {
      feeds: []
    });

    _defineProperty(_assertThisInitialized(_this), "loadFeed", function () {
      var rawFeed;
      var formattedFeed = [];

      _axios["default"].get('http://localhost:8080/api/feed').then(function (res) {
        rawFeed = res.data.feed;

        for (var i in rawFeed) {
          formattedFeed.push(React.createElement(_feedTemplate["default"], {
            key: i,
            title: rawFeed[i].title,
            date: rawFeed[i].date,
            body: rawFeed[i].body
          }));
        }

        formattedFeed.reverse();

        _this.setState({
          feeds: formattedFeed
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "addFeed", function (_FeedTemplate) {});

    return _this;
  }

  _createClass(Composition, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadFeed();
    }
  }, {
    key: "render",
    value: function render() {
      var feeds;
      console.log(this.state.feeds);
      if (typeof this.state.feeds != "undefined" && this.state.feeds.length > 0) feeds = this.state.feeds.map(function (feed) {
        return feed;
      });else if (this.state.feeds.length == 1) feeds = this.state.feeds[0];else feeds = React.createElement("div", null, "Feed Space");
      console.log(feeds);
      return React.createElement("div", {
        className: "Composition"
      }, React.createElement("h2", null, "Project Feed"), feeds);
    }
  }]);

  return Composition;
}(React.Component);

exports["default"] = Composition;