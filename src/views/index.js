import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deustchButton, englishButton } from '../actions';
import Section from './../components/Section/';
import SimpleMenu from './../components/Menu/simple_menu';
import Main from './../components/Main/';
import SomeWorks from './../components/Some_Works/';
import FindMe from './../components/Find_Me/';
import Footer from './../components/Footer/';
import Languages from './../data/languages.json';
import './../scss/App.css';

class Home extends Component {
  constructor(){
    super();
    this.state={
      languages: Languages,
    }
  }

    render() {
      const { currentLanguage, deustchButton, englishButton } = this.props;
      return (
        <div className="App">
            <SimpleMenu />
            <Section id="first" child={<Main data={this.state} currentLanguage={this.props}/>} />
            <Section id="someworks" child={ <SomeWorks languages={this.state.languages} currentLanguage={this.props.currentLanguage}/>} />
            <Section lastSection id="findme" child={ <FindMe languages={this.state.languages} currentLanguage={this.props.currentLanguage}/>} />
            <Footer currentLanguage={currentLanguage} languages={this.state.languages} />
            {/*<MenuContainer data={this.props}/>*/}
        </div>
      );
    }
  }

const mapStateToProps = store =>({
  currentLanguage: store.languageState.currentLanguage
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ deustchButton, englishButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps) (Home);