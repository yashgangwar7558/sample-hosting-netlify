import React, { useState, useEffect } from 'react';
import Login from './Login';
import Home from './Home';
import { firebase } from "./utils/Firebase-config";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from "./utils/Axios";


let UserContext = React.createContext();


function App() {

  let [user, setUser] = useState();

  //to check state of authentication...this function triggers whenever u login or out
  useEffect(function () {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      setUser(user);

      // to get the token id of user
      if (user)
      {
        user.getIdToken(true)
          .then(function (idToken) {
            // to set axios header as users token id
            axios.defaults.headers["Authorization"] = `Bearer ${idToken}`
            console.log( axios.defaults.headers["Authorization"]);
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
      }

    });



  }, []);



  return (

    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <Switch>

          <Route path="/login" exact>
            <Login />
          </Route>

          <Route path="/" exact>
            <Home />
          </Route>

        </Switch>
      </div>
    </UserContext.Provider>

  );
}

export { App, UserContext };
