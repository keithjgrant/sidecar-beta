import React, { useEffect, useState, useRef } from 'react';

const DatabaseContext = React.createContext({});

export default function DatabaseWrapper({ children }) {
  return (
    <DatabaseContext.Provider
      value={{
        addFavorite,
        deleteFavorite,
      }}
    >
      {children}
    </DatabaseContext.Provider>
  );
}

export { DatabaseContext };
