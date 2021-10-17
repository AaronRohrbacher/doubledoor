import React from 'react';
import logo from './doubledoor.svg';
import './App.css';
import MasterForm from './form/MasterForm';
import * as Realm from "realm-web";
import Slide from 'react-reveal/Slide'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      formActive: false,
      appActive: true
    };
    this.enableForm = this.enableForm.bind(this);
  }

  enableForm() {
    this.setState({
      formActive: true,
      appActive: false
    });
  }

  render() {
    const enableForm = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {this.state.appActive && <Slide><div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              A "mobile-first" form example for Doubledoor Technologies and Amy Kwan by CTO candidate Aaron Rohrbacher
            </p>
            <button className="btn btn-primary" onClick={this.enableForm}>Get Started</button>
          </div></Slide>}
          {this.state.formActive && <MasterForm />}
        </header>
      </div>
    )
  }
}

export default App;
