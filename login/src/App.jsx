import React, { useState } from "react";
import Login from "./Login/Login.jsx";
import MainPage from "./MainPage/MainPage.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  return (
    <div>{isLoggedIn ? <MainPage /> : <Login onLogin={handleLogin} />}</div>
  );
}

export default App;
