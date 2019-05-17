import React from 'react';
import ReactDOM from 'react-dom';
import Main from './ui/mainPage/main.jsx';

const contentNode = document.getElementById('contents');

class Page extends React.Component {


  initPage = () => {

  }


  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}


ReactDOM.render(<Page />, contentNode);
