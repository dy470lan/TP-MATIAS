import React, { createContext, useState, useContext } from 'react';

const ContadorContext = createContext();

export const useContador = () => useContext(ContadorContext);

export const ContadorProvider = ({ children }) => {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);

  return (
    <ContadorContext.Provider value={{ contador, incrementar }}>
      {children}
    </ContadorContext.Provider>
  );
};
