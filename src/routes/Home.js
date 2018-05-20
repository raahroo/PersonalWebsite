import React, { Component } from 'react';
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
      currentLanguage: 0,
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
           <div>
            <button onClick={() => this.setLanguage(0)}>Deustch</button>
            <button onClick={() => this.setLanguage(1)}>English</button>
            <p>{this.state.currentLanguage}</p>
          </div>
            <Main data={this.state}/>
            <SomeWorks data={this.state} />
            <FindMe data={this.state}/>
            <MenuContainer data={this.state}/>
        </div>
      );
    }
  }
export default Home;
