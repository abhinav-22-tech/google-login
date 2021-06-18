import React, { useEffect, useState } from "react";
import Signin from "./components/Signin/Signin";
import { auth } from "./lib/firebase";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [appState, setAppState] = useState("empty");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        setAppState("home");
      } else {
        setCurrentUser(null);
        setAppState("login");
      }
    });
  }, []);

  console.log(currentUser);
  return (
    <div className="App">
      {appState === "empty" && <p>Loading...</p>}
      {appState === "home" && <p>Home Page</p>}
      {appState === "login" && <Signin />}
    </div>
  );
}

export default App;
