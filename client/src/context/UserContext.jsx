import React, { createContext, useReducer, useContext } from "react";
import { IoRefresh } from "react-icons/io5";

const initialState = {
  user: null,
  refresh: false,
};

const SET_USER = "SET_USER";
const SET_REFRESH = "SET_REFRESH";

const userReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_REFRESH:
      return { ...state, refresh: !state.refresh };
    default:
      return state;
  }
};

const UserContext = createContext();

// Provider component
const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const setUser = (user) => {
    dispatch({ type: SET_USER, payload: user });
  };
  const setRefresh = () => {
    dispatch({ type: SET_REFRESH });
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        setUser,
        refresh: state.refresh,
        setRefresh,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the context
const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export { UserProvider, useUser };
