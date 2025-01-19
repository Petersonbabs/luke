"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { createContext, useState, useContext} from "react";
import { toast } from "sonner";

const AuthContext = createContext();
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

let localUser;
let localToken;

if (typeof window !== "undefined") {
  // Only run on the client side (in the browser)
  localUser = JSON.parse(localStorage.getItem("user"));
  localToken = localStorage.getItem("token");
  // if (localUser) {
  //   setUser(localUser);
  // }
}

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localUser);
  const [token, setToken] = useState(localToken);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const navigate = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
 
  const login = async (formData) => {
    setLoadingAuth(true);
    try {
      const response = await axios.post(
        `${baseUrl}/user/login
      `,
        formData
      );
      const { email, id, token } = response.data;
      if (response.status == 200) {
        const user = {
          email,
          id,
        };
        setUser(user);
        setToken(token);
        toast.success("Login successful");
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        navigate.push("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoadingAuth(false);
    }
  };

  // SIGNUP
  const signup = async (formData) => {
    setLoadingAuth(true);
    try {
      const response = await axios.post(
        `${baseUrl}/onboard/user
      `,
        formData
      );
      const { message } = response.data;
      if (response.status == 200) {
        toast.success(message + " You can login now");
        navigate.push("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoadingAuth(false);
    }
  };

  // SIGNOUT
  const signOut = async () => {
    localStorage.clear("user");
    localStorage.clear("token");
    navigate.push("/");
  };

  const value = {
    user,
    token,
    loadingAuth,
    login,
    signup,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
