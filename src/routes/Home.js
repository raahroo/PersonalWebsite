import React, { Component } from 'react';
import MenuContainer from './../components/Menu/';
import Main from './../components/Main/';
import SomeWorks from './../components/Some_Works/';
import FindeMe from './../components/Finde_Me/';
import Languages from './../data/languages.json';
import './../scss/App.css';

class Home extends Component {
  constructor(){
    super();
    this.state={
      languages: Languages,
      actualLanguage: 0,
    }
  }

  setLanguage(language){
    console.log( 'a linguagem é' + language);
    if(language == 0){
      this.setState({actualLanguage: 0})
    } else {
      this.setState({actualLanguage: 1})
    }
  }

    render() {
      return (
        <div className="App">
           <div>
            <button onClick={() => this.setLanguage(0)}>Deustch</button>
            <button onClick={() => this.setLanguage(1)}>English</button>
            <p>{this.state.actualLanguage}</p>
          </div>
            <Main data={this.state}/>
            <SomeWorks data={this.state} />
            <FindeMe data={this.state}/>
            <MenuContainer data={this.state}/>
        </div>
      );
    }
  }
export default Home;
