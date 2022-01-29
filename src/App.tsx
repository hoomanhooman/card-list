import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import List from "./containers/List";
import Login from "./containers/Login";
import configureStore from "./store";
import AuthRoute from "./components/AuthRoute";
import "./App.scss";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <AuthRoute path="/" exact>
              <div>
                <List />
              </div>
            </AuthRoute>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
