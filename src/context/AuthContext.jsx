import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../config/config.firbase.js";
import axios from "axios";

// Create the context outside the component
const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const provider = new GoogleAuthProvider();

  const signUpwithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = () => {
    return signOut(auth);
  };

  // login with google
  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);

        // Get jwt token and set to local storage
        axios
          .post("/jwt", { email: user.email })
          .then((res) => localStorage.setItem("jwtToken", res.data));

        // Get user role and set to local storage
        axios
          .post("/user", { email: user.email })
          .then((res) => localStorage.setItem("userRole", res.data));

        setLoading(false);
      } else {
        setUser(null);
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("userRole");
        setLoading(false);
      }
    });
  }, []);

  const data = {
    signUpwithEmail,
    signInWithEmail,
    googleLogin,
    logOutUser,
    loading,
    user,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};

export { AuthContext, AuthContextProvider };
