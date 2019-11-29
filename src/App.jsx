import React from 'react';
import ReactDOM from 'react-dom';
import Main from './ui/mainPage/main.jsx';

const contentNode = document.getElementById('contents');

class FullPage extends React.Component {


  initPage = () => {

  }


  render() {
    return (
      <div className={"App"} style={{position: "fixed", left: 0, top: 0, width: "100%", height: "100%"}}>
        <Main />
      </div>
    );
  }
}


ReactDOM.render(<FullPage />, contentNode);
