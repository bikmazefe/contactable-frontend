import axios from "axios";
import { createContext, useEffect, useState, useContext } from "react";

const AuthStateContext = createContext();

function useAuth() {
  const all = useContext(AuthStateContext);
  return all;
}

function AuthStateProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/logged_in`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.logged_in) {
          setCurrentUser({ ...res.data.user });
        } else {
          setCurrentUser(null);
        }
        setAuthLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setAuthLoading(false);
      });
  }, []);

  function handleLogin(user) {
    setCurrentUser(user);
  }

  function handleLogout() {
    setCurrentUser(null);
  }

  return (
    <AuthStateContext.Provider
      value={{
        currentUser,
        authLoading,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthStateContext.Provider>
  );
}
export { useAuth, AuthStateProvider };
