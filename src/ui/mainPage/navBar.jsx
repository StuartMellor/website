import AboutLogo from '../../../static/media/aboutLogo.svg';
export default class NavBar extends React.Component {
    state = {
        hoverArr: [false, false, false, false, false]
    }

    hover = (id, hovering) => {
        this.setState(prevState => {
            var hoverArr = prevState.hoverArr;
            hoverArr[id] = hovering;
            prevState.hoverArr = hoverArr;
            return prevState;
        });
    }

    render() {
        return (
            <div id={"navBar"} style={{ position: "fixed", top: 0, left: 0, width: "60px", height: "100%", margin: "auto", padding: 0 }}>

                <div style={{position: "relative", top: "calc(50% - 205px)", height: "405px"}}>
                    <div className="about" id={"navButton"} onMouseEnter={() => { this.hover(0, true); }} onMouseLeave={() => { this.hover(0, false); }}>
                        {this.state.hoverArr[0] ?
                            <h1 class="reveal-text" style={{ fontSize: "50px", margin: "auto", paddingTop: "10px", textAlign: "center", width: "152px", background: "#161c26", marginLeft: "7px" }}>About</h1>
                            :
                            <h1 style={{ fontSize: "50px", textAlign: "center", margin: "auto", paddingTop: "10px", background: "#161c26" }}>~</h1>
                        }
                    </div>
                    <div className="composition" id={"navButton"} onMouseEnter={() => { this.hover(1, true); }} onMouseLeave={() => { this.hover(1, false); }}>
                        {this.state.hoverArr[1] ?
                            <h1 class="reveal-text" style={{ fontSize: "50px", textAlign: "center", margin: "auto", paddingTop: "10px", width: "293px", background: "#161c26", marginLeft: "9px" }}>Composition</h1>
                            :
                            <h1 style={{ fontSize: "50px", textAlign: "center", margin: "auto", paddingTop: "10px", background: "#161c26" }}>~</h1>
                        }
                    </div>
                    <div className="research" id={"navButton"} onMouseEnter={() => { this.hover(2, true); }} onMouseLeave={() => { this.hover(2, false); }}>
                        {this.state.hoverArr[2] ?
                            <h1 class="reveal-text" style={{ fontSize: "50px", textAlign: "center", margin: "auto", paddingTop: "10px", width: "215px", background: "#161c26", marginLeft: "10px" }}>Research</h1>
                            :
                            <h1 style={{ fontSize: "50px", textAlign: "center", margin: "auto", paddingTop: "10px", background: "#161c26" }}>~</h1>
                        }
                    </div>
                    <div className="software" id={"navButton"} onMouseEnter={() => { this.hover(3, true); }} onMouseLeave={() => { this.hover(3, false); }}>
                        {this.state.hoverArr[3] ?
                            <h1 class="reveal-text" style={{ fontSize: "50px", textAlign: "center", margin: "auto", paddingTop: "10px", width: "214px", background: "#161c26", marginLeft: "11px" }}>Software</h1>
                            :
                            <h1 style={{ fontSize: "50px", textAlign: "center", margin: "auto", paddingTop: "10px", background: "#161c26" }}>~</h1>
                        }
                    </div>
                    <div className="contact" id={"navButton"} onMouseEnter={() => { this.hover(4, true); }} onMouseLeave={() => { this.hover(4, false); }}>
                        {this.state.hoverArr[4] ?
                            <h1 class="reveal-text" style={{ fontSize: "50px", textAlign: "center", margin: "auto", paddingTop: "10px", width: "197px", background: "#161c26", marginLeft: "5px" }}>Contact</h1>
                            :
                            <h1 style={{ fontSize: "50px", textAlign: "center", margin: "auto", paddingTop: "10px", background: "#161c26" }}>~</h1>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

/* <div id={"navButton"} style={{ width: "20%"}}><h1 style={{margin: "auto", textAlign: "center"}}>Softare</h1></div>
                <div id={"navButton"} style={{ width: "20%"}}><h1 style={{margin: "auto", textAlign: "center"}}>Project Feed</h1></div>
                <div id={"navButton"} style={{width: "20%"}}><h1 style={{margin: "auto", textAlign: "center"}}>Contact</h1></div>
                */


const SvgAboutLogo = props => (
    <svg viewBox="0 0 246.31 246.31" {...props}>
        <defs>
            <style>
                {
                    ".aboutLogo_svg__cls-1{fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:6.66px;fill:#fff}"}
            </style>
        </defs>
        <g id="aboutLogo_svg__Layer_1" data-name="Layer 1">

            <path
                className="aboutLogo_svg__cls-1"
                d="M95.68 96.45c0-23.19 13.2-42 36.39-42s34.52 18.8 34.52 42-11.34 42-34.52 42-36.39-18.82-36.39-42z"
                transform="translate(-7.05 -6.88)"
            />
            <path
                className="aboutLogo_svg__cls-1"
                d="M42.5 239.19S30.25 216.74 63 176.68c8.39-10.26 44.78-20.52 44.78-20.52l.93-24.26M218.46 239.19s12.25-22.45-20.52-62.51c-8.4-10.26-44.79-20.52-44.79-20.52l-.93-24.26M79.82 239.19s.93-22.39 8.4-28.92M186.18 239.19s-.93-22.39-8.4-28.92"
                transform="translate(-7.05 -6.88)"
            />
        </g>
    </svg>
);


const SvgCompositionLogo = props => (
    <svg
        id="compositionLogo_svg__Layer_1"
        data-name="Layer 1"
        viewBox="0 0 246.31 246.31"
        {...props}
    >
        <defs>
            <style>
                {
                    ".compositionLogo_svg__cls-1{fill:#fff;stroke:#fff;stroke-miterlimit:10;stroke-width:6.66px}"
                }
            </style>
        </defs>
        <path
            className="compositionLogo_svg__cls-1"
            d="M52.45 101.62v52h25l28.5 28.5V76.62L81.2 101.37l-28.75.25z"
        />
        <circle
            className="compositionLogo_svg__cls-1"
            cx={152.45}
            cy={145.62}
            r={16}
        />
        <path
            className="compositionLogo_svg__cls-1"
            d="M168.45 145.62v-72M173.45 82.62l17 9"
        />
    </svg>
);