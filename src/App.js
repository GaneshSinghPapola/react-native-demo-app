import React, { Component } from "react";
import { render } from "react-dom"; // 16.2.0
import { createStore, applyMiddleware } from "redux"; // 3.7.2
import { Provider } from "react-redux"; // 5.0.7
import thunk from 'redux-thunk'
import LoginApp from "./reducers";

import Routes from "./components/routes";
import MapboxGL from '@mapbox/react-native-mapbox-gl';
MapboxGL.setAccessToken('pk.eyJ1IjoiZ2FuZXNoc2luZ2hwYXBvbGEiLCJhIjoiY2plNWJjdmJsM2U3ZzMyb2hwendoOGw3cyJ9.nVSmaCf5HZAC3w9ugAkb1Q');


const store = createStore(LoginApp, applyMiddleware(thunk));
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
