import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Context = createContext();

export const Context_porvider = ({ children }) => {
  const [loading, setloading] = useState(false);
  const [user, setuser] = useState(null);
  const [isSignedOut,setSignedOut] = useState(true)
  
  
  const values = {
    user,
    setuser,
    loading,
    setloading,isSignedOut,setSignedOut
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export const Global_Context = () => useContext(Context);
