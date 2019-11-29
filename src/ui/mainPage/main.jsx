import React from 'react';
import ReactDOM from 'react-dom';

import IntroMessage from './introMessage.jsx';
import Page from './page.jsx';
import PageHeader from '../pageHeaer.jsx';
import Navigation from './navigation.jsx';
import NavBar from './navBar.jsx';


export default class Main extends React.Component {
  constructor() {
    super();
  }

  state = {
    page: 0
  }
  changePage = (id) => {

    console.log(id);
    this.setState({page: id});
  }
  fun = () => 'hello'
   // <IntroMessage />
  render() {
    console.log("Mainpage: " + this.state.page);
    return (
      <div className={"Main"} style={{width: "100%", height: "100%"}}>
        <PageHeader/>
        
        <NavBar/>
        <Page page={this.state.page}/>
        
        <Navigation changePage={this.changePage}/>

        
      </div>

    );
  }
}
