'use strict';

var _sourceMapSupport = require('source-map-support');

var _sourceMapSupport2 = _interopRequireDefault(_sourceMapSupport);

require('babel-polyfill');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_sourceMapSupport2.default.install();

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use(_express2.default.static('static'));

app.listen(8080, function () {
	console.log('App started on port 8080');
});
//# sourceMappingURL=server.js.map