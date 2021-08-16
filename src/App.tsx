import "./App.css";

import React from "react";

import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Appbar from "./components/Appbar";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Appbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/profile" component={ProfilePage} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
