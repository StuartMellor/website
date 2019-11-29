import React from 'react';
import ReactDOM from 'react-dom';

import '../../../static/styling/ui-style.css';

import { CSSTransition } from 'react-transition-group';


export default class IntroMessage extends React.Component {
    constructor() {
        super();
    }

    state = {
        showText: true,
    }

    toggleAppear = () => {
        this.setState({
            showText: !this.state.showText
        });
    }



    componentDidMount() {

    }

    render() {
        const { showText } = this.state;
        return (
            <div style={{
                margin: '20% 0 0 0 ', width: '100%', height: '100%', fontFamily: 'Archivo Narrow', fontWeight: '700', fontSize: '75px', textAlign: 'center',
            }}
            >

                <CSSTransition
                    in={showText}
                    appear={true}
                    timeout={1200}
                    classNames="fade"
                >
                <div>

                    Site under construction!
                    <br />
                    Check back soon....
                    <br />
                    <h2 style={{ fontFamily: 'Archivo Narrow', fontWeight: '700', fontSize: '40px' }}>Email: stuart_m_mellor@hotmail.com</h2>
                </div>
                </CSSTransition>
            </div>
        );
    }
}
