import React from 'react';
import ReactDOM from 'react-dom';

import IntroMessage from './introMessage.jsx';


export default class Main extends React.Component {
  constructor() {
    super();
    this.state = { page: 0 };
  }

  fun = () => 'hello'

  render() {
    return (
      <div>
        <IntroMessage />
      </div>

    );
  }
}
