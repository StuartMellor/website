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
            { style: { margin: '20% 0 0 0 ', width: '100%', height: '100%', fontFamily: 'Archivo Narrow', fontWeight: '700', fontSize: '75px', textAlign: 'center' } },
            'Site under construction!',
            React.createElement('br', null),
            'Check back soon....',
            React.createElement('br', null),
            React.createElement(
                'h2',
                { style: { fontFamily: 'Archivo Narrow', fontWeight: '700', fontSize: '40px' } },
                'Email: stuart_m_mellor@hotmail.com'
            )
        );
    }

}
exports.default = Main;