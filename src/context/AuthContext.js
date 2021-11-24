import { useReducer, createContext, useEffect } from "react";
import { projectAuth } from "../firebase/config";
import { authCodes } from "../variables/variables";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case authCodes.log_in:
      return { ...state, user: action.payload };
    case authCodes.log_out:
      return { ...state, user: null };
    case authCodes.auth_ready:
      return { ...state, user: action.payload, authReady: true };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authReady: false,
  });
  console.log("AuthContext State: ", state);

  useEffect(() => {
    const unsub = projectAuth.onAuthStateChanged((user) => {
      dispatch({ type: authCodes.auth_ready, payload: user });
      unsub();
    });
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
