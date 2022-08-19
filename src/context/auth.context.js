import React, { createContext, useState } from "react";
import authService from "../services/auth.service";
import { useEffect } from "react";

const AuthContext = createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const storeToken = (token) => {
    localStorage.setItem("jwt", token);
  };

  const removeToken = async () => {
    localStorage.removeItem("jwt");
    if (user) refreshPage();
  };

  const getToken = () => {
    return localStorage.getItem("jwt");
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const authenticateUser = () => {
    const storedToken = getToken();

    if (!storedToken) {
      logOutUser();
    } else {
      authService
        .verify(storedToken)
        .then(({ data }) => {
          const user = data;
          setIsLoggedIn(true);
          setIsLoading(false);
          setUser(user);
          user.role == "Admin" && setIsAdmin(true);
        })
        .catch(() => logOutUser());
    }
  };

  const logOutUser = () => {
    removeToken();
    setIsLoggedIn(false);
    setIsLoading(false);
    setUser(null);
  };
  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        isAdmin,
        storeToken,
        authenticateUser,
        logOutUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProviderWrapper };
