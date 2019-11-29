import Logo from '../../../static/media/DoorwaySVG.svg';

export default class Navigation extends React.Component {

    constructor(props) {
        super();
    }

    state = {
        pages: ['About', 'Composition', 'Software', 'Project Feed', 'Contact'],
        parallax: 0
    }

    button = (pageName, key) => {
        return (
            <div  key={key}>
                <button className="NaviButton" key={key} 
                    onClick={() => 
                         this.naviClick(key)
                }>
                    {pageName} 
                </button>
            </div>
        );
    }

    naviClick = (id) => {
        this.props.changePage(id);
    }

    doorway = (colour, leftOff, leftBSize, doorWidth, doorHeight, yOff, size) => {
        const rightBlockOff = leftOff + leftBSize + doorWidth;
        const rightBlockWidth = size[0] - leftBSize - doorWidth;

        return(
            <div style={{position: "fixed", left: 0, top: 0, width: "100%", height: "100%"}} className="doorWayDiv">
                <svg style={{position: "fixed", left: 0, top: 0, width: "100%", height: "100%"}}>
                    <rect x={leftOff + "%"} y={yOff + "%"} width={leftBSize + "%"} height={size[1] + "%"} rx="0" ry="0" fill={colour}/>
                    <rect x={leftOff + "%"} y={yOff + "%"} width={size[0] + "%"} height={doorHeight + "%"} rx="0" ry="0" fill={colour}/>
                    <rect x={rightBlockOff + "%"} y={yOff + "%"} width={rightBlockWidth + "%"} height={size[1] + "%"} rx="0" ry="0" fill={colour}/>
                </svg>
            </div>
        );
    };

    floor(yOffset, colour) {
        return(
            <div style={{position: "fixed", left: 0, top: 0, width: "100%", height: "100%"}} className="floorDiv">
                <svg style={{position: "fixed", left: 0, top: 0, width: "100%", height: "100%"}}>
                    <rect x={0} y="70%" width="100%" height="30%" fill={colour}/>
                </svg>
            </div>
            
        );
    }

    doorWays = () => {
        var doors = [];
        for(var i = 0; i < 5; i++) {

        }
    }

    mouseMove = (e) => {
        this.setState({parallax: e.screenX});
    }

    render() {

        var pageButtons = this.state.pages.map((pageName, i) => {
            return this.button(pageName, i);
        });
        var parallax = ((window.innerWidth - this.state.parallax ) / (window.innerWidth / 2)) * 4;

        var push = [0,0,0,0,0];
        if(parallax < 0.5 * 4) {
            push[4] = 4;
        } else if(parallax < 1 * 4) {
            push[3] = 4;
        } else if(parallax < 1.5 * 4) {
            push[2] = 4;
        } else if(parallax < 2 * 4) {
            push[1] = 4;
        }

        parallax = (parallax - 0.5);
        return (
            // <div className="navigationBar">
            //     {
            //         pageButtons
            //     }
            // </div>
            <div style={{width: "100%", height: "100%"}} onMouseMove={this.mouseMove}>
                
          

            </div>





        );
    }
}




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