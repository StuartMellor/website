export default class About extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="About" style={{height: "90%", marginLeft: "50px"}}>
                <h1 style={{fontFamily: "josefin sans", fontWeight: "600", fontStyle: "italic", fontSize: "80px", color: "white"}}>ABOUT</h1>
                <svg height="100%" width="100%">
                    <ellipse cx="70%" cy="77.5%" rx="200" ry="50" fill="gray"/>
                    <circle cx="70%" cy="30%" r="200" stroke="white" stroke-width="12px" fill="none" />
                    
                </svg>
                <p>Stuart is an electronic composer </p>
            </div>
        );
    }
}