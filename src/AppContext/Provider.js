import React, { useState, useCallback } from 'react'
import AppContext from './Context'


const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('');

//   const setToPokedex = useCallback((pokemon) => {
//     setUser((currentUser) => ({
//       ...currentUser,
//       pokedex: {
//         ...currentUser.pokedex,
//         [pokemon.name]: pokemon
//       }
//     }));
//   }, []);

  return (
    <AppContext.Provider value={{ query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
