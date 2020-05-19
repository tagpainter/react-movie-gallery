import React from "react";
import { useLocation } from "react-router-dom";

export const AppContext = React.createContext({});

export const AppProvider = ({ children }) => {
  const location = useLocation();
  const isInitial = React.useRef(true);

  React.useEffect(() => {
    if (isInitial.current) isInitial.current = false;
  }, [location]);

  return (
    <AppContext.Provider value={{ isInitial }}>{children}</AppContext.Provider>
  );
};

export const useApp = () => React.useContext(AppContext);
