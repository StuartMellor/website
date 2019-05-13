'use strict';

var _main = require('./ui/main.jsx');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const contentNode = document.getElementById('contents');


class Page extends React.Component {
    render() {
        console.log("Rendering main page!");
        return React.createElement(
            'div',
            null,
            React.createElement(_main2.default, null)
        );
    }
}

ReactDOM.render(React.createElement(Page, null), contentNode);