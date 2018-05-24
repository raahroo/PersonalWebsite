import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import MenuContainer from './../components/Menu/';
import Main from './../components/Main/';
import SomeWorks from './../components/Some_Works/';
import FindMe from './../components/Find_Me/';
import Languages from './../data/languages.json';
import './../scss/App.css';

class Home extends Component {
  constructor(){
    super();
    this.state={
      languages: Languages,
      currentLanguage: 1,
    }
  }

  setLanguage(language){
    console.log( 'a linguagem é' + language);
    if(language === 0){
      this.setState({currentLanguage: 0})
    } else {
      this.setState({currentLanguage: 1})
    }
  }

    render() {
      return (
        <div className="App">
            <MediaQuery query="(min-width: 1224px)">
              <div className="App__language">
                <button className="App__language--button" onClick={() => this.setLanguage(0)}>Deustch</button>
                <button className="App__language--button" onClick={() => this.setLanguage(1)}>English</button>
              </div>
            </MediaQuery>
            <Main data={this.state}/>
            <SomeWorks data={this.state} />
            <FindMe data={this.state}/>
            <MenuContainer data={this.state} />
        </div>
      );
    }
  }
export default Home;
