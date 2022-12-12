import { useEffect, useState } from "react";
import AppRouter from "./Router";
import firebase from "../firebase";
import { authService } from "../firebase";

function App() {
  const auth = firebase.auth();
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>{init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing...."}</>
  );
}

export default App;
