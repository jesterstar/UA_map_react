import React, { Component } from 'react';
import logo from './map.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <object id="js-direction-map" data={logo} type="image/svg+xml"></object>
            </div>
            <div className="col-md-4">
              <div className="js-map-navigation">
                <a href="#" data-name="dnepropetrovskaya">test 1</a>
                <a href="#" data-name="chernigovskaya">test 2</a>
                <a href="#" data-name="zaporozskaya">test 3</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
