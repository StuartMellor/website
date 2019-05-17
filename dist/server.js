"use strict";

var _sourceMapSupport = _interopRequireDefault(require("source-map-support"));

require("@babel/polyfill");

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_sourceMapSupport["default"].install();

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use(_express["default"]["static"]('static'));

var test = require('../static/dat/test.json');

app.get('/api/test', function (req, res) {
  res.json({
    test: test
  });
});
app.get('/', function (req, res, next) {
  res.send('Hello world');
});
app.listen(8080, function () {
  console.log('App started on port 8000');
});
//# sourceMappingURL=server.js.map