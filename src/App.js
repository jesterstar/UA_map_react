import React, { Component } from 'react';
import logo from './map.svg';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="map">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <object id="js-direction-map" data={logo} type="image/svg+xml"></object>
              <div className="popup-window">
                <div className="popup-content">
                  <p>61010, <span>м.Харків</span>,</p>
                  <p>вул. Гольдбергівська, 63</p>
                  <p>тел.: (057) 732-24-03</p>
                  <p>адреса сайту філії: <a href="http://ps.ucrf.gov.ua/">http://ps.ucrf.gov.ua/</a></p>
                  <p><a href="#">kharkov@ucrf.gov.ua</a></p>
                </div>
                <div className="triangle"></div>
              </div>
            </div>
            <div className="col-md-4">
              <ul className="js-map-navigation">
                <li><a href="#" data-name="zahidna"><span>01</span> Західна філія</a></li>
                <li><a href="#" data-name="karpatska"><span>02</span> Карпатська філія</a></li>
                <li><a href="#" data-name="podilska"><span>03</span> Подільська філія</a></li>
                <li><a href="#" data-name="pivnichno-shidna"><span>04</span> Північно-Східна філія</a></li>
                <li><a href="#" data-name="centralna"><span>05</span> Центральна філія</a></li>
                <li><a href="#" data-name="pivdenna"><span>06</span> Південна філія</a></li>
                <li><a href="#" data-name="donetska"><span>07</span> Донецька філія</a></li>
                <li><a href="#" data-name="krymska"><span>08</span> Кримська філія</a></li>
                <li><a href="#" data-name="luganska"><span>09</span> Луганська філія</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;