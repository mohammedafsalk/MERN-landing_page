import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { authCheck } from "./services/userSignup";
import { useUser } from "./context/UserContext";

export default function App() {
  const [login, setLogin] = useState(false);
  const { setUser, refresh } = useUser();
  useEffect(() => {
    (async function () {
      let { data } = await authCheck();
      if (data.loggedIn) {
        setLogin(true);
        setUser(data.user);
      } else {
        setLogin(false);
      }
    })();
  }, [refresh]);

  return (
    <>
      <Routes>
        {login === true && (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Navigate to="/" />} />
            <Route path="/signup" element={<Navigate to="/" />} />
          </>
        )}
        {login === false && (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </>
  );
}
