import React, { createContext, useState } from "react";

const SignContext = createContext({});

export const SignProvider = ({ children }) => {
  const [sign, setSign] = useState({
    title: "",
    description: "",
    sign: "",
  });

  return (
    <SignContext.Provider value={{ sign, setSign }}>
      {children}
    </SignContext.Provider>
  );
};

export default SignContext;
