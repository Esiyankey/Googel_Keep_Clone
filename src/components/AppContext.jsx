import React, { createContext, useState } from 'react';
import { SingleNotes } from './SingleNotes';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showGrid, setShowGrid] = useState(false);

  return (
    <AppContext.Provider value={{ showGrid, setShowGrid }}>
      {children}
    </AppContext.Provider>
  );
};