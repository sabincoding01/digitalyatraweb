import React, { useState, useEffect, createContext, useContext } from "react";

// Create context for TopBar visibility
const TopBarContext = createContext();

export const useTopBarVisibility = () => useContext(TopBarContext);

export const TopBarProvider = ({ children }) => {
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);

  return (
    <TopBarContext.Provider value={{ isTopBarVisible, setIsTopBarVisible }}>
      {children}
    </TopBarContext.Provider>
  );
};
