'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
class Main extends React.Component {
    constructor() {
        super();
        this.state = { page: 0 };
    }

    render() {
        return React.createElement(
            'div',
            { style: { border: '2px solid #000000' }, className: 'pageBox' },
            React.createElement(
                'span',
                { style: { width: '100%', height: '100%', fontFamily: 'Archivo Narrow', fontWeight: '700', textAlign: 'center' } },
                'Hello Charlotte :)'
            )
        );
    }

}
exports.default = Main;