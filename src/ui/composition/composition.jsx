import Iframe from 'react-iframe';

export default class Composition extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="Composition">
                <h2>Composition</h2>
                <p>Information about my compositional practice.</p>
                <h3>A Link or embedded soundcloud profile.</h3>
                <Iframe url="https://w.soundcloud.com/player/?url=https://soundcloud.com/stuart_mellor_uol/armley-bank"
                    width="100%"
                    height="200px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative" />
            </div>
        );
    }
}