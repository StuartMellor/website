"use strict";

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
            "div",
            { style: { border: '2px solid #000000' }, className: "pageBox" },
            React.createElement(
                "span",
                null,
                "Hello World"
            )
        );
    }

}
exports.default = Main;