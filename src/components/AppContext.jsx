import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showGrid, setShowGrid] = useState(false);
 
  const ToggleGrid = ()=>{
    setShowGrid(!showGrid);
  }

  return (
    <AppContext.Provider value={{ showGrid, ToggleGrid }}>
      {children}
    </AppContext.Provider>
  );
};